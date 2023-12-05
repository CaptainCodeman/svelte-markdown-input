import { micromark, type Options as MicromarkOptions } from 'micromark'
import { writable } from 'svelte/store'

interface Options {
  debounce?: number
  micromark_options?: MicromarkOptions
}

export function createMarkdown(options?: Options) {
  const { debounce, micromark_options } = { debounce: 60, ...options }

  const { subscribe, set } = writable('')

  function action(textarea: HTMLTextAreaElement) {
    const update = () => set(micromark(textarea.value, micromark_options))
    const handle = debounceFn(update, debounce)
    textarea.addEventListener('input', handle)
    update()
    return {
      destroy() {
        textarea.removeEventListener('input', handle)
      }
    }
  }

  return Object.assign(action, { subscribe })
}


function debounceFn<T extends Function>(cb: T, wait = 60) {
  let h = 0
  let callable = (...args: any) => {
    self.clearTimeout(h)
    h = self.setTimeout(() => cb(...args), wait)
  }
  return callable as unknown as T
}

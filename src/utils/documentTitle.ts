const TITLE_DEFAULT = 'Timer Task'

export const setDocumentTitle = (title: string, reset?: boolean) => {
  if (reset) {
    document.title = TITLE_DEFAULT
    return
  }

  document.title = title
}

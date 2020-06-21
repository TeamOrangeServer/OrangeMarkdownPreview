import createRenderer from './util/render'
import MarkdownEditor from '~/components/MarkdownEditor.vue'

// Named export
export { MarkdownEditor as Editor, createRenderer }

// Default export
export default {
  Editor: MarkdownEditor,
  createRenderer
}

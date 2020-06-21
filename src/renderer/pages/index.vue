<template>
  <v-app>
    <Editor ref="editor" v-model="text" mode="preview" hint="Hint" :outline="false" :render-config="renderConfig" />
  </v-app>
</template>

<script>
import { VApp } from 'vuetify/lib'
import { Editor } from '~/plugins/build-entry.js'
export default {
  name: 'App',
  components: {
    Editor,
    VApp
  },
  data() {
    return {
      text: '',
      renderConfig: {
        // Mermaid config
        mermaid: {
          theme: 'dark'
        }
      }
    }
  },
  mounted() {
    // Access properties or methods using $refs
    // this.$refs.editor.focus();
    // this.$refs.editor.upload();
    // Dark theme
    // this.$vuetify.theme.dark = true
  }
}
</script>

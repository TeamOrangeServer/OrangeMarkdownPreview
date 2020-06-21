<template>
  <v-app>
    <div class="sp_s_top">
      <p class="setting_title indigo white--text">
        Main Config
      </p>
    </div>
    <v-card outlined left>
      <v-list-item three-line>
        <v-list-item-content>
          <v-list-item-title class="headline mb-1">
            ダークモード切り替え
          </v-list-item-title>
          <v-divider />
          <v-list-item-subtitle>
            OrangeMarkdownPreviewのテーマを変更します。
          </v-list-item-subtitle>
        </v-list-item-content>
      </v-list-item>
      <v-card-actions>
        <dsw />
      </v-card-actions>
    </v-card>
    <p class="card_bottom" />
    <v-card outlined left>
      <v-list-item three-line>
        <v-list-item-content>
          <v-list-item-title class="headline mb-1">
            ハードウェアアクセラレーション無効化(未実装)
          </v-list-item-title>
          <v-divider />
          <v-list-item-subtitle>
            ※再起動が必要です。(未実装)
          </v-list-item-subtitle>
        </v-list-item-content>
      </v-list-item>
      <v-card-actions>
        <v-switch />
      </v-card-actions>
    </v-card>
    <p class="card_bottom" />
    <v-card outlined left>
      <v-list-item three-line>
        <v-list-item-content>
          <v-list-item-title class="headline mb-1">
            その他
          </v-list-item-title>
          <v-divider />
        </v-list-item-content>
      </v-list-item>
      <v-card-actions>
        <v-container>
          <div class="sp_s_bottom text-center">
            <v-btn to="edition" style="width: 100%;" disabled>
              他の配布形態
            </v-btn>
          </div>
          <div class="sp_s_bottom text-center">
            <v-btn to="oss" style="width: 100%;" disabled>
              オープンソースライセンス
            </v-btn>
          </div>
        </v-container>
      </v-card-actions>
    </v-card>
    <p class="card_bottom" />
    <v-card outlined left>
      <v-list-item three-line>
        <v-list-item-content>
          <v-list-item-title class="headline mb-1">
            バージョン
          </v-list-item-title>
          <v-divider />
        </v-list-item-content>
      </v-list-item>
      <v-card-actions>
        <v-container>
          <p>{{ require('./../../../package.json').name }}: {{ require('./../../../package.json').version }}</p>
        </v-container>
      </v-card-actions>
    </v-card>
  </v-app>
</template>

<script>
import dsw from '~/components/DarkSwitch.vue'

export default {
  components: {
    dsw
  }
}
</script>

<style></style>

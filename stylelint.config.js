import stylelintConfigCleanOrder from "stylelint-config-clean-order"
import stylelintConfigStandardScss from "stylelint-config-standard-scss"
import stylelintOrder from "stylelint-order"

/** @type {import("stylelint").Config} */
export default {
  extends: [stylelintConfigStandardScss, stylelintConfigCleanOrder],
  plugins: [stylelintOrder, "stylelint-scss"],
  ignoreFiles: ["**/node_modules/**", "**/dist/**", "**/build/**"],
  rules: {
    "max-nesting-depth": 3,
    "block-no-empty": true,
  },
}

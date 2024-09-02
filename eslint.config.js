export default {
  parser: "@typescript-eslint/parser",
  "extends": [
    "eslint:recommended",
    "plugin:react/recommended",
    "plugin:@typescript-eslint/recommended",
    "prettier",
  ],
  plugins: [
    "@typescript-eslint",
    "react",
    "prettier"
  ],
  "resolveJsonModule": true,
  "isolatedModules": true,
  "esModuleInterop": true,
  "forceConsistentCasingInFileNames": true,
  "strict": true,
  "skipLibCheck": true,
  "rules": {
    "no-console": "error",
    "require-await": "error",
    "eqeqeq": "error",
    "no-nested-ternary": "error",
    "prettier/prettier": "error",
    "import/no-unresolved": "error",
  }
};
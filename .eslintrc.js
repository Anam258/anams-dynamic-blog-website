module.exports = {
    extends: [
      'next/core-web-vitals',
      'next/typescript',
    ],
    rules: {
      // No console in production
      "no-console": ["error", { "allow": ["warn", "error"] }],
      
      // Consistent line breaks
      "linebreak-style": ["error", "unix"],
      
      // Semi-colons are required
      "semi": ["error", "always"],
      
      // Consistent indentation with 2 spaces
      "indent": ["error", 2],
      
      // Consistent quote style
      "quotes": ["error", "single"],
      
      // TypeScript specific rules
      "@typescript-eslint/no-explicit-any": "error",  // Avoid `any`
      "@typescript-eslint/explicit-module-boundary-types": "error",  // Explicit return types
      "@typescript-eslint/no-unused-vars": ["error"],  // No unused variables
      
      // Use `const` for variables that are never reassigned
      "prefer-const": "error",
    },
  };
  
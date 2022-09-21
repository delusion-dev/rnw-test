# React Native [Web] + Monorepo

Tech Stack: TypeScript v4, React Native v0.63, Next.js v10 & Create React App v4.
Prettier and ESLint are also configured as pre-commit hooks.

### How to run

- `$ git clone ...`
- `$ cd rnw-test`
- `$ yarn`
- Web
  - [CRA] `$ yarn web`
  - [Next.js] `$ yarn workspace web-nextjs dev`
- Mobile
  - [iOS]
    - `$ cd packages/mobile/ios && pod update && pod install && cd -`
    - [CLI]
      - `$ yarn ios`
    - [Xcode]
      - `$ yarn workspace mobile start`
      - `yarn xcode`
      - Press the Run button
  - [Android]
    - [CLI]
      - `$ yarn android`
    - [Android Studio]
      - `$ yarn workspace mobile start`
      - `yarn studio`
      - Press the Run button

### Chrome extension

- `$ yarn web:build`
- Visit `chrome://extensions/` on your Chrome browser and enable the developer mode toggle.
- Then, click `Load unpacked` and select your `packages\web-cra\build` folder.

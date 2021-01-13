// translate.ts
import { createTranslations } from 'react-ridge-translations'

// first describe which languages are allowed/required (Typescript)
type TranslationLanguages = {
  en: string
  ja: string
}

// create a translation object with your translations
const translate = createTranslations<TranslationLanguages>()({
  bannerText: {
    bannerText: {
      en: 'please fill in the form data to join our plateform',
      ja: 'プラットフォームに参加するには、フォームデータに入力してください',
    },
  },
  pageName: {
    dashboard: {
      en: 'dashboard',
      ja: 'ダッシュボード',
    },
    registration: {
      en: 'registration',
      ja: '登録',
    }
  },
  graphData: {
    header: {
      en: "Today's trends",
      ja: '今日のトレンド',
    },
    yesterday: {
      en: 'yesterday',
      ja: '昨日',
    },
    today: {
      en: 'today',
      ja: '今日',
    },
  },
  buttons: {
    next: {
      en: 'Next',
      ja: '次',
    },
    previous: {
      en: 'previous',
      ja: '前',
    },
    submit: {
      en: 'submit',
      ja: '参加する',
    }
  },

  steps: {
    stepOne: ({ name }: { name: string }) => ({
      en: ` ${name}`,
      ja: `ファーストネーム`,
    }),
    stepTwo: ({ name }: { name: string }) => ({
      en: ` ${name}`,
      ja: `苗字`,
    }),
    stepThree: ({ name }: { name: string }) => ({
      en: ` ${name}`,
      ja: `パスワード`,
    }),
    stepFour: ({ name }: { name: string }) => ({
      en: ` ${name}`,
      ja: `Eメール`,
    }),
  },
  errors: {
    nameError: ({ error }: { error: string }) => ({
      en: ` ${error}`,
      ja: `名は有効である必要があります`,
    }),
    lastNameError: ({ error }: { error: string }) => ({
      en: ` ${error}`,
      ja: `姓は有効である必要があります`,
    }),
    passwordError: ({ error }: { error: string }) => ({
      en: ` ${error}`,
      ja: `パスワードは6文字以上である必要があります`,
    }),
    emailError: ({ error }: { error: string }) => ({
      en: ` ${error}`,
      ja: `メールは有効である必要があります`,
    }),
  },
  sideBarItems: {
    0: ({ name }: { name: string }) => ({
      en: ` ${name}`,
      ja: `概要`,
    }),
    1: ({ name }: { name: string }) => ({
      en: ` ${name}`,
      ja: `切符売場`,
    }),
    2: ({ name }: { name: string }) => ({
      en: ` ${name}`,
      ja: `アイデア`,
    }),
    3: ({ name }: { name: string }) => ({
      en: ` ${name}`,
      ja: `エージェント`,
    }),
    4: ({ name }: { name: string }) => ({
      en: ` ${name}`,
      ja: `設定`,
    }),
    5: ({ name }: { name: string }) => ({
      en: ` ${name}`,
      ja: `サブセクション`,
    }),
  },
  ticketStatus: {
    1: ({ status }: { status: string }) => ({
      en: ` ${status}`,
      ja: `未解決`,
    }),
    2: ({ status }: { status: string }) => ({
      en: ` ${status}`,
      ja: `解決しました`,
    }),
    3: ({ status }: { status: string }) => ({
      en: ` ${status}`,
      ja: `閉まっている`,
    }),
    4: ({ status }: { status: string }) => ({
      en: ` ${status}`,
      ja: `保留中`,
    })
  },
  welcomeMsg: {
    welcomeMsg: ({ name }: { name: string }) => ({
      en: ` Welcome ${name}`,
      ja: `ようこそ ${name}`,
    }),
  }
}, {
  language: 'en',
  fallback: 'ja',
})
export default translate
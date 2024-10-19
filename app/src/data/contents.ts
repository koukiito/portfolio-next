import * as IconsFa6 from "react-icons/fa6";
import * as IconsSi from "react-icons/si";

export const contents = {
  siteName: "Kouki Ito's Portfolio",
  navigation: [
    { name: "Home", href: "/" },
    { name: "About/Skills", href: "/about" },
    { name: "Projects", href: "/projects" },
  ],
  home: {
    name: "Kouki Ito / 伊藤 光希",
    title: "Undergraduate Student at the Hiroshima University",
    description:
      "プロダクトによる価値提供を重視し、人と人とのコミュニケーション、分野間のコラボレーションを大切に開発する学生エンジニア",
    subDescription: "連絡はLinkedInまたはXのDMまでお願いいたします。",
    ctaText: "View My Projects",
    ctaLink: "/projects",
    subCtaText: "About / Skills",
    subCtaLink: "/about",

    profilePicture: "/images/profile/profile_1400x1400.JPG",
    socialLinks: [
      {
        name: "GitHub",
        link: "https://github.com/koukiito",
        icon: "FaGithub",
      },
      {
        name: "X",
        link: "https://x.com/Kouki__Ito",
        icon: "FaXTwitter",
      },
      {
        name: "LinkedIn",
        link: "https://www.linkedin.com/in/koukiito",
        icon: "FaLinkedin",
      },
    ],
    positions: [
      {
        title:
          "Google Developer Student Clubs Hiroshima University Founder / Ex-Lead",
        date: "09/2023 - 08/2024",
      },
      {
        title:
          "Student Fellow Town & Gown Institute of Innovation for the Future",
        date: "12/2023 - Present",
      },
    ],
  },
  about: {
    title: "About Me",
    description:
      "プロダクトによる価値提供を重視し、人と人とのコミュニケーション、分野間のコラボレーションを大切に開発する学生エンジニア",
    certificates: [
      {
        name: "応用情報技術者試験 合格",
        issuer: "情報処理推進機構",
        date: "04/2024",
      },
      {
        name: "TOEIC Listening & Reading IP Test 800点 取得",
        issuer: "",
        date: "12/2023",
      },
      {
        name: "基本情報技術者試験 合格",
        issuer: "情報処理推進機構",
        date: "11/2023",
      },
      {
        name: "ITパスポート試験 合格",
        issuer: "情報処理推進機構",
        date: "06/2022",
      },
      {
        name: "普通自動車第一種運転免許",
        issuer: "",
        date: "06/2021",
      },
    ],
    skills: [
      {
        name: "Flutter",
        icon: IconsSi.SiFlutter,
        color: "#02569B",
        categories: ["Frontend Framework"],
        description: "アプリを作成しストアに公開",
        projects: [1, 2, 3],
      },
      {
        name: "TypeScript",
        icon: IconsSi.SiTypescript,
        color: "#3178C6",
        categories: ["Language"],
        description: "Next.js, Express.jsで使用",
        projects: [4, 11],
      },
      {
        name: "Python",
        icon: IconsSi.SiPython,
        color: "#3776AB",
        categories: ["Language"],
        description: "機械学習、アプリの開発、データ分析に使用",
        projects: [4, 6],
      },
      {
        name: "Go",
        icon: IconsFa6.FaGolang,
        color: "#00ADD8",
        categories: ["Language"],
        description: "簡易なAPIサーバを作成",
        projects: [],
      },
      {
        name: "MySQL",
        icon: IconsSi.SiMysql,
        color: "#4479A1",
        categories: ["Database"],
        description: "各種アプリケーションのDBとして使用",
        projects: [4, 11],
      },
      {
        name: "Docker",
        icon: IconsFa6.FaDocker,
        color: "#2496ED",
        categories: ["Containerization"],
        description: "各種アプリケーションの環境として利用",
        projects: [4, 11],
      },
      {
        name: "Unity",
        icon: IconsFa6.FaUnity,
        color: "#000000",
        categories: ["Game Engine"],
        description: "3Dステージの作成に使用",
        projects: [],
      },
      {
        name: "AWS",
        icon: IconsFa6.FaAws,
        color: "#FF9900",
        categories: ["Cloud Platform"],
        description:
          "アプリケーションのデプロイに使用。クラウド基盤についての講義も履修",
        projects: [4],
      },
      {
        name: "Firebase",
        icon: IconsSi.SiFirebase,
        color: "#FFCA28",
        categories: ["Backend as a Service"],
        description: "モバイルアプリのバックエンドとして使用",
        projects: [1, 3],
      },
      {
        name: "Express",
        icon: IconsSi.SiExpress,
        color: "#000000",
        categories: ["Backend Framework"],
        description: "APIサーバの作成に使用",
        projects: [4, 11],
      },
      {
        name: "ServiceNow",
        icon: IconsFa6.FaArrowsSpin,
        color: "#82d562",
        categories: ["Business Application Platform", "ITSM", "CSM"],
        description: "業務改善アプリケーションの開発",
        projects: [5],
      },
      {
        name: "Linux",
        icon: IconsFa6.FaLinux,
        color: "#FCC624",
        categories: ["OS"],
        description: "サーバの構築に使用",
        projects: [4, 11],
      },
      {
        name: "Swift",
        icon: IconsFa6.FaSwift,
        color: "#FA7343",
        categories: ["Language"],
        description: "iOSアプリの開発に使用",
        projects: [1],
      },
      {
        name: "C#",
        icon: IconsSi.SiCsharp,
        color: "#239120",
        categories: ["Language"],
        description: "Unityでの開発に使用",
        projects: [10],
      },
      {
        name: "JavaScirpt",
        icon: IconsFa6.FaJs,
        color: "#F7DF1E",
        categories: ["Language"],
        description: "スクリプト実装に使用",
        projects: [5],
      },
      {
        name: "C",
        icon: IconsSi.SiC,
        color: "#A8B9CC",
        categories: ["Language"],
        description: "講義にて習得",
        projects: [],
      },
      {
        name: "Java",
        icon: IconsFa6.FaJava,
        color: "#007396",
        categories: ["Language"],
        description: "講義にて習得",
        projects: [],
      },
      {
        name: "C++",
        icon: IconsSi.SiCplusplus,
        color: "#00599C",
        categories: ["Language"],
        description: "はじめて学んだプログラム言語",
        projects: [],
      },
    ],
  },
  projects: [
    {
      id: 1,
      title: "HirodaiApp",
      shortDescription:
        "広島大学に関わりのある方へ向けたモバイルアプリケーション",
      fullDescription:
        "広島大学へ関わりのある方の生活がより便利になるよう企画開発したモバイルアプリケーションです。フロントエンドにはFlutterを採用し、バックエンドにはFirebaseを使用しています。初期バージョンはSwiftで開発しましたが、マルチプラットフォーム対応のためFlutterでリプレースしました。",
      technologies: ["Flutter", "Firebase", "NFC"],
      features: [
        "時間割",
        "ニュース",
        "マップ",
        "電子マネー残高の確認",
        "Authenticater (TOTP)",
      ],
      challenges:
        "iOS, Androidの双方に対応したアプリケーションを開発。審査を通過させストアへ公開した。",
      imageUrl: "/images/projects/hirodai_app-1200x628.png",
      projectUrl:
        "https://apps.apple.com/us/app/hirodaiapp/id6443854182?itsct=apps_box_promote_link&itscg=30200",
    },
    {
      id: 2,
      title: "RacePlus",
      shortDescription:
        "レーシングシミュレータと連携してダッシュボードを表示するモバイルアプリケーション",
      fullDescription:
        "レーシングシミュレータとUDPを利用して通信し、車両のステータスを確認するダッシュボードを表示するモバイルアプリケーションです。RevenueCatを使用してサブスクリプションを実装しています。",
      technologies: ["Flutter", "RevenueCat", "UDP"],
      features: ["ダッシュボード", "サブスクリプション"],
      challenges:
        "RevenueCatを利用してサブスクリプションを実装。またUDPを利用してレーシングシミュレータと通信。",
      imageUrl: "/images/projects/race_plus-1200x628.png",
      githubUrl: "https://github.com/yourusername/ecommerce-platform",
    },
    {
      id: 3,
      title: "ToDogether",
      shortDescription:
        "学生と教員間のコミュニケーションを促進するモバイルアプリケーション",
      fullDescription:
        "授業中の不明点をピン形式で共有し、学生と教員間のコミュニケーションを促進するモバイルアプリケーションです。フロントエンドにはFlutterを採用し、バックエンドにはFirebaseを使用しています。Solution Challenge Japan 2023にて開発し企業賞を受賞。リードとしてデザイナー等さまざまな得意分野を持つメンバーを率いて受賞を達成。",
      technologies: ["Flutter", "Firebase"],
      features: ["振り返り/質問ピン機能", "教室情報"],
      challenges:
        "Firebaseを利用してリアルタイムで共有されるピン機能を実装。またデザイナー等異なる得意領域を持つメンバーを率いて開発。",
      imageUrl: "/images/projects/scjp-2023-habataki.svg",
      projectUrl:
        "https://drive.google.com/file/d/1dKALEvT3wKnjSpBxEvzw_JOku5kzgzwT/view?usp=sharing",
    },
    {
      id: 4,
      title: "Carbon Calculator Hiroshima",
      shortDescription:
        "最短経路探索を用いてCO2排出量を計算するWebアプリケーション",
      fullDescription:
        "バス、電車の公共交通機関データに最短経路探索アルゴリズムのダイクストラ法を用いて求めた経路とGoogle Maps Platform Routes APIから取得した徒歩、自動車の経路と各交通手段のCO2排出量データから経路のCO2排出量を計算し可視化することでSDGsに貢献するWebアプリケーションです。フロントエンドにはNext.js x TypeScriptを採用し、バックエンドにはExpress.js x TypeScriptを使用、データベースにはMySQLを使用しています。AWS Lambdaを利用した航空/新幹線バージョンを機能拡張とパフォーマンス向上の観点からリプレース。",
      technologies: [
        "Next.js",
        "Express.js",
        "MySQL",
        "TypeScript",
        "Google Maps Platform",
        "AWS Lambda",
      ],
      features: ["CO2排出量計算", "経路探索"],
      challenges:
        "GTFSフォーマットのオープンデータを用いてバスデータを取得。数万エッジが存在する経路探索を実行。",
      imageUrl: "/images/projects/carbon_calculator_hiroshima.png",
    },
    {
      id: 5,
      title: "ServiceNow Japan Hackathon 2023",
      shortDescription:
        "「広島大学＆慶應義塾大学アカデミックチーム」で参加したハッカソン",
      fullDescription:
        "「広島大学＆慶應義塾大学アカデミックチーム」で参加し、アプリケーションを開発しました。学部、学年、大学が異なるチームでリードを務め、企業チームが多い中、唯一の学生チームとして参加しました。",
      technologies: [
        "ServiceNow",
        "JavaScript",
        "ChatBot",
        "NLU",
        "ChatGPT API",
      ],
      features: ["記事プラットフォーム", "NLU(自然言語理解)を用いたChatBot"],
      challenges:
        "ServiceNowが持つ機能を最大限活用した上で、ChatGPT APIを利用してワークフローの自動化を実現。また学部、学年、大学が異なるチームで共創し開発/発表。",
      imageUrl: "/images/projects/servicenow_hackathon_2023.png",
      projectUrl: "https://zenn.dev/koukiito/articles/123e4792f87589",
    },
    {
      id: 6,
      title: "AI交通量測定ソリューション",
      shortDescription:
        "定点カメラから無人での交通量計測を可能とするAI交通量測定ソリューション",
      fullDescription:
        "PythonとCNNを用いて、従来は屋外での調査となり負荷の大きい交通量測定を無人化するAI交通量測定ソリューションを開発しました。実際に企業に利用いただきました。",
      technologies: ["Python", "Keras", "CNN"],
      features: [
        "Aiによる交通量測定の自動化",
        "車両種別の分類",
        "方向の分類",
        "GPUによる高速化",
      ],
      challenges:
        "機械学習を実務へ応用。車両種別ごと、方向ごとに分類して車両画像を出力しすることで証拠を保持。",
      imageUrl: "/images/projects/traffic_counter.png",
      projectUrl: "https://zenn.dev/koukiito/articles/123e4792f87589",
    },
    {
      id: 10,
      title: "Unity 3D Stage",
      shortDescription: "Unityで作成した3Dステージ MMD: © 2016 cover corp.",
      fullDescription:
        "Unity上で3Dステージを作成。ArtNet経由でDMX信号を受信し、各種MAシステムから照明を制御。MMD, モーション, 楽曲 © 2016 cover corp.",
      technologies: ["Unity", "ArtNet", "DMX"],
      features: [
        "3Dステージ",
        "DMXライティング制御",
        "マルチカメラスイッチング",
      ],
      challenges:
        "ステージ、照明、カメラを実装し3Dライブエンターテイメントを制作。照明、カメラ操作も自身で行いました。",
      imageUrl: "/images/projects/unity_3d_stage.png",
      youtubeVideoId: "MCNy--ZhKhU",
    },
    {
      id: 11,
      title: "Tuning the backend Contest 2024",
      shortDescription:
        'Backendのパフォーマンスチューニングコンテスト"Tuning the backend Contest 2024 in Hiroshima"に参加し二位を獲得',
      fullDescription:
        "Backendをチューニングしパフォーマンスを競うコンテストに参加し、三人チームで二位を獲得しました。",
      technologies: ["Express.js", "MySQL", "Docker", "TypeScript", "Azure"],
      features: [
        "パフォーマンスチューニング",
        "データベース最適化",
        "高トラフィック対応",
      ],
      challenges:
        "できるだけ多くのトラフィックを処理することができるようパフォーマンスチューニングを行いました。",
      imageUrl: "/images/projects/tuning_contest_2024_in_hiroshima.png",
      githubUrl: "https://github.com/koukiito/TuningContest2024inHiroshima",
    },
    {
      id: 12,
      title: "Tuning the backend Contest 2024 Autumn",
      shortDescription:
        '"Tuning the backend Contest 2024 Autumn in Hiroshima"に参加し一位を獲得',
      fullDescription:
        "二回目の参加で、前回とは異なる三人チームで一位を獲得しました。",
      technologies: ["Rust", "MySQL", "Docker", "NGINX", "Azure"],
      features: [
        "パフォーマンスチューニング",
        "データベース最適化",
        "高トラフィック対応",
      ],
      challenges:
        "できるだけ多くのトラフィックを処理することができるようパフォーマンスチューニングを行いました。",
      imageUrl: "/images/projects/tuning_contest_2024_autumn_in_hiroshima.png",
      githubUrl: "https://github.com/koukiito/app-foxtrot-HiroshimaUniv-Tuning-2409",
    },
  ],
  footer: {
    copyright: "© 2024 Kouki Ito. All rights reserved.",
  },
};

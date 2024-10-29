import { defineConfig } from "vitepress";
import markdownItFootnote from "markdown-it-footnote";

// https://vitepress.dev/reference/site-config
export default defineConfig({
	cacheDir: "../.cache",
	outDir: "../dist",
	title: "Misskey.art Service",
	description: "Misskey.art ドキュメント",
	head: [
		["link", { rel: "icon", href: "/favicon.ico" }],
		["link", { rel: "preconnect", href: "https://fonts.googleapis.com" }],
		[
			"link",
			{ rel: "preconnect", href: "https://fonts.gstatic.com", crossorigin: "" },
		],
		[
			"link",
			{
				href: "https://fonts.googleapis.com/css2?family=IBM+Plex+Sans+JP:wght@400;500;600;700&display=swap",
				rel: "stylesheet",
			},
		],
	],
	lang: "ja",
	cleanUrls: true,
	lastUpdated: true,
	markdown: {
		config: (md) => {
			// use more markdown-it plugins!
			md.use(markdownItFootnote);
		},
		container: {
			tipLabel: "備考",
			warningLabel: "注意",
			dangerLabel: "警告",
		},
	},
	vite: {
		css: {
			transformer: "lightningcss",
		},

		build: {
			cssMinify: "lightningcss",
		},
	},
	themeConfig: {
		logo: "/logo.png",
		search: {
			provider: "local",
			options: {
				translations: {
					button: {
						buttonText: "検索",
						buttonAriaLabel: "検索",
					},
					modal: {
						displayDetails: "詳細リストを表示",
						resetButtonTitle: "リセット",
						backButtonTitle: "戻る",
						noResultsText: "検索結果が見つかりません",
						footer: {
							selectText: "選択",
							selectKeyAriaLabel: "スペースキー",
							navigateText: "移動",
							navigateUpKeyAriaLabel: "上キー",
							navigateDownKeyAriaLabel: "下キー",
							closeText: "閉じる",
							closeKeyAriaLabel: "esc",
						},
					},
				},
			},
		},
		outline: {
			level: "deep",
			label: "目次",
		},
		// https://vitepress.dev/reference/default-theme-config
		nav: [{ text: "ホーム", link: "/" }],

		sidebar: [
			{
				text: "ルール",
				items: [
					{ text: "Misskey.art", link: "/rules" },
					{ text: "Discord", link: "/discord_rules" },
				],
			},
			{
				text: "ガイドライン",
				link: "/guidelines",
				items: [
					{ text: "投稿ガイドライン", link: "/guidelines/note_guidelines" },
					{ text: "NSFWガイドライン", link: "/guidelines/nsfw_guidelines" },
					{
						text: "自衛ガイドライン",
						link: "/guidelines/self-defense_guidelines",
					},
					{ text: "通報ガイドライン", link: "/guidelines/report_guidelines" },
				],
			},
			{
				text: "その他",
				items: [
					{
						text: "出資・寄付",
						link: "/investments_and_donations",
					},
				],
			},
			{ text: "利用規約", link: "/tos" },
			{ text: "プライバシーポリシー", link: "/privacy_policy" },
		],

		socialLinks: [{ icon: "discord", link: "https://discord.misskey.art/" }],

		lastUpdated: {
			text: "最終更新",
		},

		docFooter: {
			prev: "前のページ",
			next: "次のページ",
		},

		darkModeSwitchTitle: "ダークモードに切り替え",
		lightModeSwitchTitle: "ライトモードに切り替え",

		sidebarMenuLabel: "メニュー",

		returnToTopLabel: "ページの先頭に戻る",

		darkModeSwitchLabel: "外観",
	},
	// experimental
	metaChunk: true,
});

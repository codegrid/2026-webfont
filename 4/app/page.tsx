export default function Home() {
  return (
    <main style={{ padding: "2rem", maxWidth: "800px", margin: "0 auto" }}>
      <h1 style={{ fontSize: "2rem", fontWeight: 700, marginBottom: "1rem" }}>
        next/font/google デモ
      </h1>

      <p style={{ marginBottom: "1rem", lineHeight: 1.8 }}>
        このページは Next.js の <code>next/font/google</code> を使って Noto Sans
        JP を読み込んでいます。
      </p>

      <section style={{ marginBottom: "2rem" }}>
        <h2
          style={{ fontSize: "1.5rem", fontWeight: 700, marginBottom: "0.5rem" }}
        >
          font-weight: 400（通常）
        </h2>
        <p style={{ fontWeight: 400, lineHeight: 1.8 }}>
          吾輩は猫である。名前はまだ無い。どこで生れたかとんと見当がつかぬ。何でも薄暗いじめじめした所でニャーニャー泣いていた事だけは記憶している。
        </p>
      </section>

      <section style={{ marginBottom: "2rem" }}>
        <h2
          style={{ fontSize: "1.5rem", fontWeight: 700, marginBottom: "0.5rem" }}
        >
          font-weight: 700（太字）
        </h2>
        <p style={{ fontWeight: 700, lineHeight: 1.8 }}>
          吾輩は猫である。名前はまだ無い。どこで生れたかとんと見当がつかぬ。何でも薄暗いじめじめした所でニャーニャー泣いていた事だけは記憶している。
        </p>
      </section>

      <section>
        <h2
          style={{ fontSize: "1.5rem", fontWeight: 700, marginBottom: "0.5rem" }}
        >
          特徴
        </h2>
        <ul style={{ lineHeight: 2, paddingLeft: "1.5rem" }}>
          <li>ビルド時にフォントがダウンロードされ、セルフホスティングされる</li>
          <li>本番環境では Google Fonts のサーバーへのリクエストが発生しない</li>
          <li>
            <code>font-display: swap</code> がデフォルトで設定される
          </li>
          <li>CORS の設定が不要（同一オリジンから配信）</li>
        </ul>
      </section>
    </main>
  );
}

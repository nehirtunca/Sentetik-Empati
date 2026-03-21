export default function Home() {
  return (
    <main className="min-h-screen bg-[#f7f5fb] px-4 py-12 text-zinc-800 sm:px-6 lg:px-8">
      <div className="mx-auto flex w-full max-w-5xl flex-col gap-8">
        <section className="rounded-3xl border border-violet-100 bg-white/90 p-6 shadow-sm backdrop-blur sm:p-8">
          <h1 className="text-3xl font-semibold tracking-tight text-violet-950 sm:text-4xl">
            Sentetik Empati: Baskasinin Kalbiyle Hisset
          </h1>
          <p className="mt-3 max-w-2xl text-sm leading-7 text-zinc-600 sm:text-base">
            Toplumsal dislanma hikayelerini duygusal bir siire ve soyut bir
            tuvale donusturen sakin bir deneyim.
          </p>
          <p className="mt-2 text-sm text-zinc-500">
            Lutfen ad, telefon, adres gibi kisisel bilgileri paylasmayin.
          </p>
        </section>

        <section className="rounded-3xl border border-violet-100 bg-white p-6 shadow-sm sm:p-8">
          <label
            htmlFor="story"
            className="mb-2 block text-sm font-medium text-violet-900"
          >
            Hikayenizi yazin
          </label>
          <textarea
            id="story"
            name="story"
            rows={6}
            placeholder="Metroda insanlarin, kiyafetleri eski oldugu icin bir gencin yanina oturmaktan kacindigini gordum..."
            className="w-full resize-none rounded-2xl border border-violet-200 bg-violet-50/40 px-4 py-3 text-sm leading-6 outline-none transition focus:border-violet-400 focus:ring-2 focus:ring-violet-200"
            aria-describedby="story-help"
          />
          <p id="story-help" className="mt-2 text-xs text-zinc-500">
            Kisa ama anlamli bir ani yazmaniz yeterli.
          </p>
          <button
            type="button"
            className="mt-5 inline-flex items-center justify-center rounded-full bg-violet-700 px-5 py-2.5 text-sm font-medium text-white transition hover:bg-violet-600 focus-visible:outline-none focus-visible:ring-2 focus-visible:ring-violet-300"
          >
            Donustur ve Hisset
          </button>
        </section>

        <section className="rounded-3xl border border-violet-100 bg-white p-6 shadow-sm sm:p-8">
          <p className="text-xs font-medium uppercase tracking-wide text-violet-700">
            Isleme sureci (ornek)
          </p>
          <div className="mt-3 flex flex-wrap gap-2 text-sm text-zinc-600">
            <span className="rounded-full bg-violet-50 px-3 py-1">
              Duygular analiz ediliyor...
            </span>
            <span className="rounded-full bg-violet-50 px-3 py-1">
              Siir dokunuyor...
            </span>
            <span className="rounded-full bg-violet-50 px-3 py-1">
              Tuval boyaniyor...
            </span>
          </div>
        </section>

        <section className="grid gap-4 rounded-3xl border border-violet-100 bg-white p-6 shadow-sm sm:grid-cols-2 sm:p-8">
          <article className="rounded-2xl bg-violet-50/60 p-5">
            <h2 className="text-sm font-semibold uppercase tracking-wide text-violet-900">
              Uretilen Siir
            </h2>
            <p className="mt-3 whitespace-pre-line text-sm leading-7 text-zinc-700">
              {`Ayni vagonda sessizlik buyuyor,\nBir cift gozde kirik bir aksam duruyor.\nYanindan gecen kalabalik soguk bir ruzgar,\nGorulmeyen yara en derinden kanar.\nBir koltuk bos, bir kalp daha da bos,\nEmpati bir adimda baslar, en hos.`}
            </p>
          </article>

          <article className="rounded-2xl bg-violet-50/60 p-5">
            <h2 className="text-sm font-semibold uppercase tracking-wide text-violet-900">
              Soyut Gorsel
            </h2>
            <div
              className="mt-3 flex min-h-52 items-center justify-center rounded-xl border border-dashed border-violet-300 bg-white text-center text-sm text-zinc-500"
              role="img"
              aria-label="Hikaye ve siirle uyumlu soyut gorsel alani"
            >
              Gorsel burada belirecek
            </div>
          </article>
        </section>

        <section className="flex flex-wrap gap-3">
          <button
            type="button"
            className="rounded-full border border-violet-300 bg-white px-4 py-2 text-sm font-medium text-violet-900 transition hover:bg-violet-50"
          >
            Resmi Indir
          </button>
          <button
            type="button"
            className="rounded-full border border-violet-300 bg-white px-4 py-2 text-sm font-medium text-violet-900 transition hover:bg-violet-50"
          >
            Farkindalik Yarat
          </button>
        </section>
      </div>
    </main>
  );
}

import Image from "next/image";

export default function IndiaHeadquarters() {
  return (
    <section className="section-y bg-white">
      <div className="mx-auto max-w-7xl px-6">
        <div className="rounded-panel from-navy via-navy-mid to-brand overflow-hidden bg-gradient-to-br text-white">
          <div className="grid items-center lg:grid-cols-2">
            {/* LEFT */}

            <div className="p-12 lg:p-16">
              <p className="eyebrow text-accent">Global headquarters</p>

              <h2 className="display-2 mt-4 font-bold">
                Kolkata,
                <br />
                India
              </h2>

              <p className="mt-8 text-xl leading-relaxed text-white/80">
                Ubique Systems' Global Headquarters is strategically located in
                Kolkata, serving as the operational hub for international
                recruitment, workforce solutions and consulting engagements
                across Europe, North America and Asia-Pacific.
              </p>

              <div className="mt-12 grid grid-cols-2 gap-8">
                <div>
                  <div className="text-accent text-4xl font-bold">Global</div>

                  <div className="mt-2 text-white/70">Headquarters</div>
                </div>

                <div>
                  <div className="text-accent text-4xl font-bold">15+</div>

                  <div className="mt-2 text-white/70">Countries Served</div>
                </div>
              </div>
            </div>

            {/* RIGHT */}

            <div className="relative h-full">
              <Image
                src="/images/countries/kolkata-hq.jpg"
                alt="Kolkata Global Headquarters"
                width={1200}
                height={900}
                className="h-[500px] w-full object-cover lg:h-full"
              />

              <div className="to-navy/30 absolute inset-0 bg-gradient-to-l from-transparent via-transparent" />
            </div>
          </div>
        </div>
      </div>
    </section>
  );
}

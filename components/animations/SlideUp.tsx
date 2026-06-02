export default function Footer() {
  return (
    <footer className="bg-black text-white py-20">

      <div className="max-w-7xl mx-auto px-6">

        <div className="grid md:grid-cols-4 gap-12">

          <div>
            <h3 className="font-bold text-xl">
              UBIQUE
            </h3>
          </div>

          <div>
            <h4 className="font-semibold mb-4">
              Company
            </h4>

            <p>About</p>
            <p>Careers</p>
          </div>

          <div>
            <h4 className="font-semibold mb-4">
              Services
            </h4>

            <p>IT Consulting</p>
            <p>Staffing</p>
          </div>

          <div>
            <h4 className="font-semibold mb-4">
              Contact
            </h4>

            <p>info@ubique-systems.com</p>
          </div>

        </div>

      </div>

    </footer>
  );
}
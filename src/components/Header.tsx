import Link from "next/link"

export default function Header() {
  return (
    <header>
      {/* First part of header */}
      <div>
        {/* Logo */}
        <div>
          <Link href={`/`}></Link>
        </div>
        <div>
          <span>Mon-Thu: 9:00 AM - 5:30 PM</span>
          {/* Shop info after click on schedule above */}
          <div>
            <div></div>
            <div></div>
            <div></div>
          </div>
        </div>
        <div>
          <span>
            Visit our showroom in 1234 Street Adress City Address, 1234 Contact
            Us
          </span>
        </div>
        <div>
          <span>Call Us: (00) 1234 5678</span>
          <span></span>
          <span></span>
        </div>
      </div>
      {/* Second part of header */}
      <div>
        {/* Logo */}
        <div>
          <Link href={`/`}></Link>
        </div>
        <nav>
          <ul>
            <li>
              <button>Laptops</button>
            </li>
            <li>
              <button>Desktop PCs</button>
            </li>
            <li>
              <button>Networking devices</button>
            </li>
            <li>
              <button>Printers & Scanners</button>
            </li>
            <li>
              <button>PC Parts</button>
            </li>
            <li>
              <button>All Other Products</button>
            </li>
            <li>
              <button>Repairs</button>
            </li>
            <li>
              <button>Our Deals</button>
            </li>
          </ul>
        </nav>
        <div>
          <span>Burger</span>
          <div></div>
        </div>
        {/* Search */}
        <div></div>
        {/* Shopping cart */}
        <div></div>
        {/* Account */}
        <div></div>
      </div>
    </header>
  )
}

import Link from 'next/link'
import Image from 'next/image'
import GlobalSearchForm from '../../components/global-search/client.global-search'

export default async function Header() {
  return (
    <header className="top-0 left-0 sticky bg-black">
      <nav className="flex items-center gap-x-3 mx-auto h-12 container">
        <Link href="/" className="mx-2">
          <Image
            src="https://gamerguides.com/assets/front/images/logo/gg-logo-desktop.svg"
            alt="GamerGuides Logo"
            width={130}
            height={24}
          />
        </Link>

        <GlobalSearchForm />
      </nav>
    </header>
  )
}

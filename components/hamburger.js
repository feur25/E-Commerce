import Link from 'next/link'
import { slide as Menu } from 'react-burger-menu'
const HamburgerMenu = () => (<div className='relative p-2'>
    <Menu customBurgerIcon={<HamburgerIcon />} width={'auto'} className='left-0 top-16' >
        <Links />
    </Menu>
</div>)

const HamburgerIcon = () => (<div className='p-1/2'><svg className="w-8 h-9 text-black" fill="none" strokeLinecap="round" strokeLinejoin="round" strokeWidth="2" viewBox="0 0 24 24" stroke="currentColor"><path d="M4 6h16M4 12h16M4 18h16"></path></svg></div>)

export const Links = () => (<>
    <Link href="/"><a className='font-bold p-4'>Home</a></Link>
    <Link href="/shop/bag"><a className='font-bold p-4'>Bag</a></Link>
    <Link href="/shop/bougie"><a className='font-bold p-4'>Bougie</a></Link>
    <Link href="/shop/bijoue"><a className='font-bold p-4'>Bijoue</a></Link>
    <Link href="/shop/savon"><a className='font-bold p-4'>Savon</a></Link>
</>)

export default HamburgerMenu
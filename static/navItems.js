import {
  AiOutlinePieChart,
  AiOutlinePlusCircle,
  AiOutlineGift,
} from 'react-icons/ai'
import { BiTrendingUp } from 'react-icons/bi'
import { RiCoinsLine, RiNotification3Line } from 'react-icons/ri'
import { MdWeb } from 'react-icons/md'
import { BsPersonPlus } from 'react-icons/bs'

export const navItems = [
  {
    title: 'Assets',
    icon: <AiOutlinePieChart />,
    href: '/',
  },
  {
    title: 'Trade',
    icon: <BiTrendingUp />,
    href: '/',
  },
  {
    title: 'Pay',
    icon: <RiCoinsLine />,
    href: '/',
  },
  {
    title: 'For You',
    icon: <MdWeb />,
    href: '/',
  },
  {
    title: 'Learn and earn',
    icon: <AiOutlinePlusCircle />,
    href: 'https://coinmarketcap.com/alexandria',
  },
  {
    title: 'Notifications',
    icon: <RiNotification3Line />,
    href: '/',
  },
  {
    title: 'Invite Friends',
    icon: <BsPersonPlus />,
    href: '/',
  },
  {
    title: 'Send a gift',
    icon: <AiOutlineGift />,
    href: '/',
  },
]

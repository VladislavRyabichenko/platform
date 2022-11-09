import clsx from 'clsx'
import React from 'react'
import tw from 'twin.macro'
import styled from '@emotion/styled'
import { Link } from 'react-router-dom'

const NavLink = styled(Link)`
  ${tw`
    flex
    gap-x-2
    items-center
    justify-center xl:justify-start
    text-bodysmall
    font-medium
    w-12 xl:w-auto
    h-12 xl:h-auto
  `};
`

interface Props {
  isActive: boolean;
  icon: React.FunctionComponent<{
    className:string
  }>;
  label: string;
  href: string;
}

const NavItem = ({
  isActive,
  icon: Icon,
  label,
  href
} : Props) => {
  return (
    <NavLink className="relative" to={href}>
      <Icon className={clsx(
        'w-5 xl:w-4',
        'h-5 xl:h-4',
        isActive ? 'stroke-primary-500' : 'dark:stroke-icon-500 stroke-icon-light-400',
        (href === '/trader-community' || href === '/expert-traders') && (
          isActive ? 'fill-primary-500' : 'dark:fill-icon-500 fill-icon-light-400'
        )
      )
      } />
      <p className={clsx(
        'hidden xl:inline',
        isActive ? 'dark:text-text-100 text-primary-500' : 'dark:text-text-400 text-text-200'
      )}>{label}</p>

      {isActive && (
        <>
          <svg className="absolute right-[-8px] xl:right-0" width="3" height="16" viewBox="0 0 3 16" fill="none" xmlns="http://www.w3.org/2000/svg">
            <rect width="3" height="16" rx="1" fill="#2160DC"/>
          </svg>
        </>
      )}
    </NavLink>
  )
}

export default NavItem

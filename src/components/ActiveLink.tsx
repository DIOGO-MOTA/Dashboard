import Link, { LinkProps } from "next/link";
import { useRouter } from "next/router";
import { cloneElement, ReactElement } from "react";


interface ActiveLinkProps extends LinkProps {
  children: ReactElement;
  shouldMatchExachtHref?: boolean;
}

export function ActiveLink({ children, shouldMatchExachtHref, ...rest }: ActiveLinkProps) {
  const { asPath } = useRouter()

  let isActive = false;

  if ( shouldMatchExachtHref && asPath === rest.href  || asPath === rest.as ) {
    isActive = true
  }

  if (!shouldMatchExachtHref && (asPath.startsWith(String(rest.href)) || asPath.startsWith(String(rest.as)))) {
    isActive = true
  }

  return (
    <Link {...rest}>
      {cloneElement(children,{
        color: isActive ? 'yellow.500' : 'gray.50'
      })}
    </Link>
  )
}
import { NextResponse } from 'next/server'

export async function GET(req: Request) {
  const url = new URL(req.url)
  const redirectUrl = url.searchParams.get('redirectUrl') ?? '/'

  const response = NextResponse.redirect(redirectUrl)

  // Set a fake cookie or token if needed
  response.cookies.set({
    name: 'guest_token',
    value: 'dummy_guest_token',
    httpOnly: true,
    path: '/',
  })

  return response
}

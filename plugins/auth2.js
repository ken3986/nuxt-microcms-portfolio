import test from '@/middleware/auth'

export default async (context) => {
  test(context)
  // console.log('auth2')
  // console.log(route)
  // if (route.path !== '/login') {
  //   console.log('error')
  //   return redirect({ path: '/login' })
  // }
}

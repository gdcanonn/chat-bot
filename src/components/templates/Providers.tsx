'use client'

import { GlobalProvider } from '@/contexts/Global'

const Providers = ({ children }: { children: React.ReactNode }) => (
  <GlobalProvider>{children}</GlobalProvider>
)

export default Providers

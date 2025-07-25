import { getServerSession } from "next-auth"
import { redirect } from "next/navigation"

export default async function HomePage() {
  const session = await getServerSession()

  if (!session?.user) {
    redirect("/login")
  }

  // Redirection vers /accueil
  redirect("/accueil")
} 
"use client"

import { Copy, ExternalLink, MessageCircle } from "lucide-react"
import { Button } from "@/components/ui/button"
import { Card, CardContent, CardDescription, CardHeader, CardTitle } from "@/components/ui/card"
import { Badge } from "@/components/ui/badge"
import { Analytics } from "@vercel/analytics/react"

export default function HomePage() {
  const donationAddress = "4tjZZXb613SpuMyUhQn8KHKQ84JRFgZsVoY7xcVZiHr2"
  const tokenAddress = "C4WfgtSvVQ3MhLq5WcaDEC3abFPcxxRbzAANEV9nbonk"

  const copyToClipboard = (text: string) => {
    navigator.clipboard.writeText(text)
  }

  return (
    <div className="min-h-screen bg-gradient-to-br from-slate-900 via-purple-900 to-slate-900 flex flex-col">
      <Analytics />

      {/* Header */}
      <header className="p-6">
        <div className="max-w-4xl mx-auto">
          <h1 className="text-2xl font-bold text-white">abreu.foundation</h1>
        </div>
      </header>

      {/* Main Content */}
      <main className="flex-1 flex items-center justify-center p-6">
        <div className="max-w-2xl mx-auto text-center space-y-8">
          {/* Coming Soon */}
          <div className="space-y-4">
            <h2 className="text-6xl md:text-8xl font-bold text-white mb-4">Coming Soon</h2>
            <p className="text-xl text-gray-300">Something amazing is being built here.</p>
          </div>

          {/* Telegram Community */}
          <div className="bg-white/10 backdrop-blur-sm border-white/20 rounded-lg p-6 mb-8">
            <div className="flex items-center justify-center gap-3 mb-4">
              <MessageCircle className="w-6 h-6 text-blue-400" />
              <h3 className="text-xl font-semibold text-white">Join Our Community</h3>
            </div>
            <p className="text-gray-300 mb-4">Stay updated and connect with the community</p>
            <Button asChild className="bg-blue-500 hover:bg-blue-600 text-white border-0">
              <a href="https://t.me/abreuofficial" target="_blank" rel="noopener noreferrer">
                <MessageCircle className="w-4 h-4 mr-2" />
                Join Telegram
              </a>
            </Button>
          </div>

          {/* Cards Container */}
          <div className="grid md:grid-cols-2 gap-6 mt-8">
            {/* Donations Card */}
            <Card className="bg-white/10 backdrop-blur-sm border-white/20">
              <CardHeader>
                <CardTitle className="text-white flex items-center gap-2">
                  Donations
                  <Badge variant="secondary" className="bg-green-500/20 text-green-300 border-green-500/30">
                    raff.sol
                  </Badge>
                </CardTitle>
                <CardDescription className="text-gray-300">Support the foundation</CardDescription>
              </CardHeader>
              <CardContent className="space-y-4">
                <div className="bg-black/20 p-3 rounded-lg">
                  <p className="text-sm text-gray-400 mb-1">Solana Address</p>
                  <p className="text-white font-mono text-xs break-all">{donationAddress}</p>
                </div>
                <div className="flex gap-2">
                  <Button
                    variant="outline"
                    size="sm"
                    onClick={() => copyToClipboard(donationAddress)}
                    className="flex-1 bg-white/10 border-white/20 text-white hover:bg-white/20"
                  >
                    <Copy className="w-4 h-4 mr-2" />
                    Copy
                  </Button>
                  <Button
                    variant="outline"
                    size="sm"
                    asChild
                    className="bg-white/10 border-white/20 text-white hover:bg-white/20"
                  >
                    <a href={`https://solscan.io/account/${donationAddress}`} target="_blank" rel="noopener noreferrer">
                      <ExternalLink className="w-4 h-4" />
                    </a>
                  </Button>
                </div>
              </CardContent>
            </Card>

            {/* Token Card */}
            <Card className="bg-white/10 backdrop-blur-sm border-white/20">
              <CardHeader>
                <CardTitle className="text-white flex items-center gap-2">
                  Token
                  <Badge variant="secondary" className="bg-blue-500/20 text-blue-300 border-blue-500/30">
                    abreu.token
                  </Badge>
                </CardTitle>
                <CardDescription className="text-gray-300">Official foundation token</CardDescription>
              </CardHeader>
              <CardContent className="space-y-4">
                <div className="bg-black/20 p-3 rounded-lg">
                  <p className="text-sm text-gray-400 mb-1">Token Address</p>
                  <p className="text-white font-mono text-xs break-all">{tokenAddress}</p>
                </div>
                <div className="flex gap-2">
                  <Button
                    variant="outline"
                    size="sm"
                    onClick={() => copyToClipboard(tokenAddress)}
                    className="flex-1 bg-white/10 border-white/20 text-white hover:bg-white/20"
                  >
                    <Copy className="w-4 h-4 mr-2" />
                    Copy
                  </Button>
                  <Button
                    variant="outline"
                    size="sm"
                    asChild
                    className="bg-white/10 border-white/20 text-white hover:bg-white/20"
                  >
                    <a href={`https://solscan.io/token/${tokenAddress}`} target="_blank" rel="noopener noreferrer">
                      <ExternalLink className="w-4 h-4" />
                    </a>
                  </Button>
                </div>
              </CardContent>
            </Card>
          </div>
        </div>
      </main>

      {/* Footer */}
      <footer className="p-6 border-t border-white/10">
        <div className="max-w-4xl mx-auto text-center">
          <p className="text-gray-400 text-sm">
            © 2025 abreu.foundation • Built with{" "}
            <a
              href="https://metasal.xyz"
              target="_blank"
              rel="noopener noreferrer"
              className="text-blue-400 hover:text-blue-300 transition-colors"
            >
              metasal.xyz
            </a>
          </p>
        </div>
      </footer>
    </div>
  )
}

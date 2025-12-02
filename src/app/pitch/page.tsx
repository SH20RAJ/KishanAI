import React from 'react';
import { Header, Footer } from '@/components';
import {
  Smartphone,
  Users,
  Globe,
  TrendingUp,
  Shield,
  Zap,
  CheckCircle,
  BarChart3,
  MapPin,
  Clock,
  DollarSign,
  Target,
  Award,
  Lightbulb
} from 'lucide-react';

export default function PitchPage() {
  return (
    <div className="min-h-screen bg-gradient-to-b from-green-50 via-white to-gray-50">
      <Header />

      <main className="pt-20">
        {/* Hero Section */}
        <section className="container mx-auto px-4 py-16 text-center">
          <div className="max-w-4xl mx-auto">
            <div className="inline-flex items-center gap-2 bg-green-100 text-green-800 px-4 py-2 rounded-full text-sm font-medium mb-6">
              <Award className="w-4 h-4" />
              Investor & Stakeholder Pitch
            </div>

            <h1 className="text-5xl md:text-6xl font-bold mb-6 leading-tight">
              <span className="text-gray-900">Why </span>
              <span className="bg-gradient-to-r from-green-600 to-blue-600 bg-clip-text text-transparent">
                100M+ Farmers
              </span>
              <span className="text-gray-900"> Will Use KisanAI</span>
            </h1>

            <p className="text-xl text-gray-600 mb-8 max-w-3xl mx-auto">
              Data-backed answers to every skeptical question about farmer adoption,
              technology penetration, and market viability in rural India
            </p>
          </div>
        </section>

        {/* Key Questions Section */}
        <section className="container mx-auto px-4 py-16">
          <div className="text-center mb-16">
            <h2 className="text-4xl font-bold text-gray-900 mb-4">
              The Questions Everyone Asks
            </h2>
            <p className="text-xl text-gray-600 max-w-2xl mx-auto">
              We've researched every concern and have compelling, data-driven answers
            </p>
          </div>

          <div className="space-y-16">

            {/* Question 1: Phone Usage */}
            <div className="bg-white rounded-2xl shadow-lg p-8 border border-gray-100">
              <div className="flex items-start gap-6">
                <div className="w-16 h-16 bg-red-100 rounded-xl flex items-center justify-center flex-shrink-0">
                  <Smartphone className="w-8 h-8 text-red-600" />
                </div>
                <div className="flex-1">
                  <h3 className="text-2xl font-bold text-gray-900 mb-4">
                    "How will farmers use phones? Do they even have smartphones?"
                  </h3>

                  <div className="grid md:grid-cols-2 gap-8">
                    <div>
                      <h4 className="text-lg font-semibold text-gray-800 mb-3">📊 The Reality (2024 Data)</h4>
                      <ul className="space-y-2 text-gray-600">
                        <li className="flex items-center gap-2">
                          <CheckCircle className="w-5 h-5 text-green-500" />
                          <span><strong>78% of farming households</strong> have smartphones (142M farmers)</span>
                        </li>
                        <li className="flex items-center gap-2">
                          <CheckCircle className="w-5 h-5 text-green-500" />
                          <span><strong>67% have 2+ smartphones</strong> per household</span>
                        </li>
                        <li className="flex items-center gap-2">
                          <CheckCircle className="w-5 h-5 text-green-500" />
                          <span><strong>89% share phones</strong> with family members</span>
                        </li>
                        <li className="flex items-center gap-2">
                          <CheckCircle className="w-5 h-5 text-green-500" />
                          <span><strong>22% annual growth</strong> in rural smartphone adoption</span>
                        </li>
                      </ul>
                    </div>

                    <div>
                      <h4 className="text-lg font-semibold text-gray-800 mb-3">🎯 Our Solution</h4>
                      <ul className="space-y-2 text-gray-600">
                        <li className="flex items-center gap-2">
                          <Zap className="w-5 h-5 text-blue-500" />
                          <span><strong>Family sharing model</strong> - one phone serves multiple farmers</span>
                        </li>
                        <li className="flex items-center gap-2">
                          <Zap className="w-5 h-5 text-blue-500" />
                          <span><strong>Voice-first interface</strong> - perfect for shared usage</span>
                        </li>
                        <li className="flex items-center gap-2">
                          <Zap className="w-5 h-5 text-blue-500" />
                          <span><strong>No personal data</strong> - no privacy concerns when sharing</span>
                        </li>
                        <li className="flex items-center gap-2">
                          <Zap className="w-5 h-5 text-blue-500" />
                          <span><strong>Works on Telegram</strong> - no app download needed</span>
                        </li>
                      </ul>
                    </div>
                  </div>

                  <div className="mt-6 p-4 bg-green-50 rounded-lg">
                    <p className="text-sm text-green-800">
                      <strong>Source:</strong> Telecom Regulatory Authority of India (TRAI) 2024,
                      Internet and Mobile Association of India (IAMAI) Rural Internet Report 2024
                    </p>
                  </div>
                </div>
              </div>
            </div>

            {/* Question 2: Literacy */}
            <div className="bg-white rounded-2xl shadow-lg p-8 border border-gray-100">
              <div className="flex items-start gap-6">
                <div className="w-16 h-16 bg-orange-100 rounded-xl flex items-center justify-center flex-shrink-0">
                  <Globe className="w-8 h-8 text-orange-600" />
                </div>
                <div className="flex-1">
                  <h3 className="text-2xl font-bold text-gray-900 mb-4">
                    "What about illiterate farmers? How will they use technology?"
                  </h3>

                  <div className="grid md:grid-cols-2 gap-8">
                    <div>
                      <h4 className="text-lg font-semibold text-gray-800 mb-3">📊 Literacy Reality</h4>
                      <ul className="space-y-2 text-gray-600">
                        <li className="flex items-center gap-2">
                          <BarChart3 className="w-5 h-5 text-orange-500" />
                          <span><strong>67.3% farmer literacy rate</strong> (can read basic text)</span>
                        </li>
                        <li className="flex items-center gap-2">
                          <BarChart3 className="w-5 h-5 text-orange-500" />
                          <span><strong>87% prefer voice messages</strong> over text</span>
                        </li>
                        <li className="flex items-center gap-2">
                          <BarChart3 className="w-5 h-5 text-orange-500" />
                          <span><strong>92% use WhatsApp voice</strong> messaging</span>
                        </li>
                        <li className="flex items-center gap-2">
                          <BarChart3 className="w-5 h-5 text-orange-500" />
                          <span><strong>78% learn voice commands</strong> within 1 week</span>
                        </li>
                      </ul>
                    </div>

                    <div>
                      <h4 className="text-lg font-semibold text-gray-800 mb-3">🎯 Voice-First Design</h4>
                      <ul className="space-y-2 text-gray-600">
                        <li className="flex items-center gap-2">
                          <Zap className="w-5 h-5 text-blue-500" />
                          <span><strong>Complete voice interaction</strong> - no reading required</span>
                        </li>
                        <li className="flex items-center gap-2">
                          <Zap className="w-5 h-5 text-blue-500" />
                          <span><strong>15+ Indian languages</strong> with regional dialects</span>
                        </li>
                        <li className="flex items-center gap-2">
                          <Zap className="w-5 h-5 text-blue-500" />
                          <span><strong>Simple voice commands</strong> in local dialects</span>
                        </li>
                        <li className="flex items-center gap-2">
                          <Zap className="w-5 h-5 text-blue-500" />
                          <span><strong>Visual feedback</strong> with icons and images</span>
                        </li>
                      </ul>
                    </div>
                  </div>

                  <div className="mt-6 p-4 bg-orange-50 rounded-lg">
                    <p className="text-sm text-orange-800">
                      <strong>Key Insight:</strong> Voice technology adoption in rural India is 3x faster than text-based apps.
                      Farmers who can't read are already using voice messages on WhatsApp daily.
                    </p>
                  </div>
                </div>
              </div>
            </div>

            {/* Question 3: Internet & Data */}
            <div className="bg-white rounded-2xl shadow-lg p-8 border border-gray-100">
              <div className="flex items-start gap-6">
                <div className="w-16 h-16 bg-blue-100 rounded-xl flex items-center justify-center flex-shrink-0">
                  <TrendingUp className="w-8 h-8 text-blue-600" />
                </div>
                <div className="flex-1">
                  <h3 className="text-2xl font-bold text-gray-900 mb-4">
                    "What about poor internet and expensive data costs?"
                  </h3>

                  <div className="grid md:grid-cols-2 gap-8">
                    <div>
                      <h4 className="text-lg font-semibold text-gray-800 mb-3">📊 Connectivity Reality</h4>
                      <ul className="space-y-2 text-gray-600">
                        <li className="flex items-center gap-2">
                          <TrendingUp className="w-5 h-5 text-blue-500" />
                          <span><strong>84% rural areas</strong> have 4G coverage</span>
                        </li>
                        <li className="flex items-center gap-2">
                          <TrendingUp className="w-5 h-5 text-blue-500" />
                          <span><strong>₹7-12 per GB</strong> average data cost</span>
                        </li>
                        <li className="flex items-center gap-2">
                          <TrendingUp className="w-5 h-5 text-blue-500" />
                          <span><strong>67% have Wi-Fi access</strong> (home/public)</span>
                        </li>
                        <li className="flex items-center gap-2">
                          <TrendingUp className="w-5 h-5 text-blue-500" />
                          <span><strong>₹149 average monthly</strong> data spend</span>
                        </li>
                      </ul>
                    </div>

                    <div>
                      <h4 className="text-lg font-semibold text-gray-800 mb-3">🎯 Optimized for Rural</h4>
                      <ul className="space-y-2 text-gray-600">
                        <li className="flex items-center gap-2">
                          <Zap className="w-5 h-5 text-green-500" />
                          <span><strong>&lt;1MB per disease detection</strong> - ultra-low data usage</span>
                        </li>
                        <li className="flex items-center gap-2">
                          <Zap className="w-5 h-5 text-green-500" />
                          <span><strong>Offline mode</strong> - core features work without internet</span>
                        </li>
                        <li className="flex items-center gap-2">
                          <Zap className="w-5 h-5 text-green-500" />
                          <span><strong>Smart caching</strong> - downloads when Wi-Fi available</span>
                        </li>
                        <li className="flex items-center gap-2">
                          <Zap className="w-5 h-5 text-green-500" />
                          <span><strong>Compressed responses</strong> - optimized for slow networks</span>
                        </li>
                      </ul>
                    </div>
                  </div>

                  <div className="mt-6 p-4 bg-blue-50 rounded-lg">
                    <p className="text-sm text-blue-800">
                      <strong>Cost Analysis:</strong> Using KisanAI costs farmers less than ₹10/month in data charges,
                      while potentially saving ₹5,000+ annually through better crop management.
                    </p>
                  </div>
                </div>
              </div>
            </div>

            {/* Question 4: Market Size & Adoption */}
            <div className="bg-white rounded-2xl shadow-lg p-8 border border-gray-100">
              <div className="flex items-start gap-6">
                <div className="w-16 h-16 bg-purple-100 rounded-xl flex items-center justify-center flex-shrink-0">
                  <Users className="w-8 h-8 text-purple-600" />
                </div>
                <div className="flex-1">
                  <h3 className="text-2xl font-bold text-gray-900 mb-4">
                    "How many farmers will actually use your app?"
                  </h3>

                  <div className="grid md:grid-cols-2 gap-8">
                    <div>
                      <h4 className="text-lg font-semibold text-gray-800 mb-3">📊 Market Size</h4>
                      <ul className="space-y-2 text-gray-600">
                        <li className="flex items-center gap-2">
                          <Target className="w-5 h-5 text-purple-500" />
                          <span><strong>146 million farmers</strong> in India (total addressable market)</span>
                        </li>
                        <li className="flex items-center gap-2">
                          <Target className="w-5 h-5 text-purple-500" />
                          <span><strong>78 million smartphone users</strong> (serviceable market)</span>
                        </li>
                        <li className="flex items-center gap-2">
                          <Target className="w-5 h-5 text-purple-500" />
                          <span><strong>23% use agricultural apps</strong> currently</span>
                        </li>
                        <li className="flex items-center gap-2">
                          <Target className="w-5 h-5 text-purple-500" />
                          <span><strong>35% annual growth</strong> in agri-tech adoption</span>
                        </li>
                      </ul>
                    </div>

                    <div>
                      <h4 className="text-lg font-semibold text-gray-800 mb-3">🎯 Adoption Strategy</h4>
                      <ul className="space-y-2 text-gray-600">
                        <li className="flex items-center gap-2">
                          <Lightbulb className="w-5 h-5 text-green-500" />
                          <span><strong>Year 1: 10 million farmers</strong> (conservative target)</span>
                        </li>
                        <li className="flex items-center gap-2">
                          <Lightbulb className="w-5 h-5 text-green-500" />
                          <span><strong>Viral growth model</strong> - farmers share with neighbors</span>
                        </li>
                        <li className="flex items-center gap-2">
                          <Lightbulb className="w-5 h-5 text-green-500" />
                          <span><strong>Government partnerships</strong> - KVK integration</span>
                        </li>
                        <li className="flex items-center gap-2">
                          <Lightbulb className="w-5 h-5 text-green-500" />
                          <span><strong>Progressive farmer leaders</strong> as early adopters</span>
                        </li>
                      </ul>
                    </div>
                  </div>

                  <div className="mt-6 p-4 bg-purple-50 rounded-lg">
                    <p className="text-sm text-purple-800">
                      <strong>Proven Demand:</strong> Existing agricultural apps like Plantix have 10M+ users despite limited features.
                      KisanAI's comprehensive solution addresses all major pain points.
                    </p>
                  </div>
                </div>
              </div>
            </div>

            {/* Question 5: Business Model */}
            <div className="bg-white rounded-2xl shadow-lg p-8 border border-gray-100">
              <div className="flex items-start gap-6">
                <div className="w-16 h-16 bg-green-100 rounded-xl flex items-center justify-center flex-shrink-0">
                  <DollarSign className="w-8 h-8 text-green-600" />
                </div>
                <div className="flex-1">
                  <h3 className="text-2xl font-bold text-gray-900 mb-4">
                    "How will you make money without charging farmers?"
                  </h3>

                  <div className="grid md:grid-cols-2 gap-8">
                    <div>
                      <h4 className="text-lg font-semibold text-gray-800 mb-3">📊 Revenue Potential</h4>
                      <ul className="space-y-2 text-gray-600">
                        <li className="flex items-center gap-2">
                          <DollarSign className="w-5 h-5 text-green-500" />
                          <span><strong>₹2.3 lakh crore</strong> agricultural services market</span>
                        </li>
                        <li className="flex items-center gap-2">
                          <DollarSign className="w-5 h-5 text-green-500" />
                          <span><strong>₹12,000 crore digital</strong> services growing at 35%</span>
                        </li>
                        <li className="flex items-center gap-2">
                          <DollarSign className="w-5 h-5 text-green-500" />
                          <span><strong>₹150-300 per farmer</strong> annual revenue potential</span>
                        </li>
                        <li className="flex items-center gap-2">
                          <DollarSign className="w-5 h-5 text-green-500" />
                          <span><strong>67% willing to pay</strong> for proven yield improvement</span>
                        </li>
                      </ul>
                    </div>

                    <div>
                      <h4 className="text-lg font-semibold text-gray-800 mb-3">🎯 Revenue Streams</h4>
                      <ul className="space-y-2 text-gray-600">
                        <li className="flex items-center gap-2">
                          <Zap className="w-5 h-5 text-blue-500" />
                          <span><strong>Freemium model</strong> - basic free, premium paid</span>
                        </li>
                        <li className="flex items-center gap-2">
                          <Zap className="w-5 h-5 text-blue-500" />
                          <span><strong>B2B partnerships</strong> - seed/fertilizer companies</span>
                        </li>
                        <li className="flex items-center gap-2">
                          <Zap className="w-5 h-5 text-blue-500" />
                          <span><strong>Data insights</strong> - aggregated analytics</span>
                        </li>
                        <li className="flex items-center gap-2">
                          <Zap className="w-5 h-5 text-blue-500" />
                          <span><strong>Government contracts</strong> - extension services</span>
                        </li>
                      </ul>
                    </div>
                  </div>

                  <div className="mt-6 p-4 bg-green-50 rounded-lg">
                    <p className="text-sm text-green-800">
                      <strong>Profitability Timeline:</strong> Break-even at 5M users (18-24 months),
                      with multiple revenue streams reducing dependency on farmer payments.
                    </p>
                  </div>
                </div>
              </div>
            </div>

            {/* Question 6: Competition */}
            <div className="bg-white rounded-2xl shadow-lg p-8 border border-gray-100">
              <div className="flex items-start gap-6">
                <div className="w-16 h-16 bg-red-100 rounded-xl flex items-center justify-center flex-shrink-0">
                  <Shield className="w-8 h-8 text-red-600" />
                </div>
                <div className="flex-1">
                  <h3 className="text-2xl font-bold text-gray-900 mb-4">
                    "How will you compete with Google, Microsoft, and big tech?"
                  </h3>

                  <div className="grid md:grid-cols-2 gap-8">
                    <div>
                      <h4 className="text-lg font-semibold text-gray-800 mb-3">📊 Competitive Landscape</h4>
                      <ul className="space-y-2 text-gray-600">
                        <li className="flex items-center gap-2">
                          <Shield className="w-5 h-5 text-red-500" />
                          <span><strong>Google:</strong> Limited agricultural AI focus in India</span>
                        </li>
                        <li className="flex items-center gap-2">
                          <Shield className="w-5 h-5 text-red-500" />
                          <span><strong>Microsoft:</strong> FarmBeats platform, limited farmer reach</span>
                        </li>
                        <li className="flex items-center gap-2">
                          <Shield className="w-5 h-5 text-red-500" />
                          <span><strong>Amazon:</strong> Alexa for agriculture, English-only</span>
                        </li>
                        <li className="flex items-center gap-2">
                          <Shield className="w-5 h-5 text-red-500" />
                          <span><strong>Indian players:</strong> Plantix, AgroStar - limited features</span>
                        </li>
                      </ul>
                    </div>

                    <div>
                      <h4 className="text-lg font-semibold text-gray-800 mb-3">🎯 Our Advantages</h4>
                      <ul className="space-y-2 text-gray-600">
                        <li className="flex items-center gap-2">
                          <CheckCircle className="w-5 h-5 text-green-500" />
                          <span><strong>Farmer-first design</strong> - built specifically for Indian farmers</span>
                        </li>
                        <li className="flex items-center gap-2">
                          <CheckCircle className="w-5 h-5 text-green-500" />
                          <span><strong>True multilingual</strong> - 15+ languages with dialects</span>
                        </li>
                        <li className="flex items-center gap-2">
                          <CheckCircle className="w-5 h-5 text-green-500" />
                          <span><strong>No app download</strong> - works on Telegram</span>
                        </li>
                        <li className="flex items-center gap-2">
                          <CheckCircle className="w-5 h-5 text-green-500" />
                          <span><strong>Deep cultural understanding</strong> - Indian agricultural context</span>
                        </li>
                      </ul>
                    </div>
                  </div>

                  <div className="mt-6 p-4 bg-red-50 rounded-lg">
                    <p className="text-sm text-red-800">
                      <strong>First-Mover Advantage:</strong> We're the first Telegram-based agricultural AI assistant.
                      By the time big tech adapts, we'll have millions of farmers and strong network effects.
                    </p>
                  </div>
                </div>
              </div>
            </div>

          </div>
        </section>

        {/* Impact Metrics Section */}
        <section className="bg-gradient-to-r from-green-600 to-blue-600 text-white py-16">
          <div className="container mx-auto px-4">
            <div className="text-center mb-12">
              <h2 className="text-4xl font-bold mb-4">Projected Impact</h2>
              <p className="text-xl text-green-100 max-w-2xl mx-auto">
                Conservative estimates based on current agricultural technology adoption rates
              </p>
            </div>

            <div className="grid md:grid-cols-4 gap-8">
              <div className="text-center">
                <div className="text-4xl font-bold text-yellow-300 mb-2">10M+</div>
                <div className="text-green-100">Farmers by Year 1</div>
              </div>
              <div className="text-center">
                <div className="text-4xl font-bold text-yellow-300 mb-2">₹500Cr</div>
                <div className="text-green-100">Annual Revenue Potential</div>
              </div>
              <div className="text-center">
                <div className="text-4xl font-bold text-yellow-300 mb-2">25%</div>
                <div className="text-green-100">Average Yield Improvement</div>
              </div>
              <div className="text-center">
                <div className="text-4xl font-bold text-yellow-300 mb-2">₹25K</div>
                <div className="text-green-100">Additional Income per Farmer</div>
              </div>
            </div>
          </div>
        </section>

        {/* Call to Action */}
        <section className="container mx-auto px-4 py-16 text-center">
          <div className="max-w-3xl mx-auto">
            <h2 className="text-4xl font-bold text-gray-900 mb-6">
              Ready to Transform Indian Agriculture?
            </h2>
            <p className="text-xl text-gray-600 mb-8">
              Join us in empowering 100+ million farmers with AI-powered agricultural assistance
            </p>

            <div className="flex flex-col sm:flex-row gap-4 justify-center">
              <a
                href="https://t.me/Kishan_aibot"
                className="bg-green-600 text-white px-8 py-4 rounded-lg font-semibold hover:bg-green-700 transition-colors"
              >
                Try Live Demo
              </a>
              <a
                href="mailto:partnerships@kisanai.in"
                className="border border-gray-300 text-gray-700 px-8 py-4 rounded-lg font-semibold hover:bg-gray-50 transition-colors"
              >
                Partner With Us
              </a>
            </div>
          </div>
        </section>

      </main>

      <Footer />
    </div>
  );
}
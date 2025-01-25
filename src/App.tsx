import CustomerFeedbackCarousel from "./components/CustomerFeedbackCarousel";
import Footer from "./components/Footer";
import Header from "./components/Header";
import ParallaxSection from "./components/ParallaxSection";

function App() {
	return (
		<main className="min-h-screen">
			<Header />

			<section className="h-screen flex items-center justify-center relative overflow-hidden">
				<div className="absolute inset-0 z-0"></div>
				<div className="relative z-10 text-center">
					<h1 className="text-6xl font-bold mb-4">
						Revolutionize Your Gym Experience
					</h1>
					<p className="text-xl mb-8">
						Track gym equipment usage, monitor gym occupancy, and
						enhance your workout planning.
					</p>
					<div className="space-x-4">
						<button className="bg-[#256EFF] text-white px-6 py-3 rounded-lg hover:bg-[#256EFF]/80 transition-colors">
							Learn More
						</button>
						<button className="bg-white text-[#0D1821] px-6 py-3 rounded-lg hover:bg-gray-200 transition-colors">
							Download App
						</button>
					</div>
				</div>
				<div className="absolute bottom-0 left-1/2 transform -translate-x-1/2 mb-8">
					<svg
						className="animate-bounce w-6 h-6 text-white"
						fill="none"
						strokeLinecap="round"
						strokeLinejoin="round"
						strokeWidth="2"
						viewBox="0 0 24 24"
						stroke="currentColor"
					>
						<path d="M19 14l-7 7m0 0l-7-7m7 7V3"></path>
					</svg>
				</div>
			</section>

			{/* Feature Sections */}
			<ParallaxSection
				title="Track Equipment Usage"
				description="Real-time updates on which equipment is in use and available."
			/>
			<ParallaxSection
				title="Monitor Gym Occupancy"
				description="Plan your gym visits with occupancy insights for maximum convenience."
				reverse
			/>
			<ParallaxSection
				title="Tailored Solutions for Everyone"
				description="Empowering gym owners with insights and gym-goers with seamless workout planning."
			/>

			{/* Customer Feedback Carousel */}
			<CustomerFeedbackCarousel />

			<Footer />
		</main>
	);
}

export default App;

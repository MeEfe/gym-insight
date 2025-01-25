export default function Footer() {
	return (
		<footer className="bg-[#0D1821] text-[#FBF9FF] py-12">
			<div className="container mx-auto px-6">
				<div className="grid grid-cols-1 md:grid-cols-4 gap-8">
					<div>
						<h3 className="text-xl font-bold mb-4">GymTech</h3>
						<p className="text-sm">
							Revolutionizing gym experiences
						</p>
					</div>
					<div>
						<h4 className="text-lg font-semibold mb-4">Contact</h4>
						<p className="text-sm">Email: info@gymtech.com</p>
						<p className="text-sm">Phone: (123) 456-7890</p>
						<p className="text-sm">
							Address: 123 Gym St, Fitness City
						</p>
					</div>
					<div>
						<h4 className="text-lg font-semibold mb-4">Legal</h4>
						<ul className="space-y-2">
							<li>
								<a
									href="/privacy"
									className="text-sm hover:text-[#256EFF] transition-colors"
								>
									Privacy Policy
								</a>
							</li>
							<li>
								<a
									href="/terms"
									className="text-sm hover:text-[#256EFF] transition-colors"
								>
									Terms of Service
								</a>
							</li>
						</ul>
					</div>
					<div>
						<h4 className="text-lg font-semibold mb-4">
							Follow Us
						</h4>
						<div className="flex space-x-4">
							{[
								"facebook",
								"twitter",
								"linkedin",
								"instagram",
							].map((social) => (
								<a
									key={social}
									href={`https://${social}.com`}
									target="_blank"
									rel="noopener noreferrer"
									className="text-[#FBF9FF] hover:text-[#256EFF] transition-colors"
								>
									<span className="sr-only">{social}</span>
									<svg
										className="w-6 h-6"
										fill="currentColor"
										viewBox="0 0 24 24"
										aria-hidden="true"
									>
										<path
											fillRule="evenodd"
											d="M22 12c0-5.523-4.477-10-10-10S2 6.477 2 12c0 4.991 3.657 9.128 8.438 9.878v-6.987h-2.54V12h2.54V9.797c0-2.506 1.492-3.89 3.777-3.89 1.094 0 2.238.195 2.238.195v2.46h-1.26c-1.243 0-1.63.771-1.63 1.562V12h2.773l-.443 2.89h-2.33v6.988C18.343 21.128 22 16.991 22 12z"
											clipRule="evenodd"
										/>
									</svg>
								</a>
							))}
						</div>
					</div>
				</div>
				<div className="mt-8 pt-8 border-t border-gray-700 text-center">
					<p className="text-sm">
						&copy; 2025 GymTech. All Rights Reserved.
					</p>
				</div>
			</div>
		</footer>
	);
}

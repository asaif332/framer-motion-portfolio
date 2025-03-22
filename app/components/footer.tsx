export default function Footer() {
	return (
		<>
			<div className="container-fluid py-20 text-white">
				<h1>
					Get
					<br />
					boosted
				</h1>
			</div>

			{/* footer */}
			<div className="container-fluid pt-20 pb-10 grid grid-cols-1 gap-16 lg:grid-cols-3 text-white font-medium">
				<div className="grid gap-2">
					<a href="">
						<img src="/logo.svg" className="h-11 block text-white" />
					</a>
					<label htmlFor="">@2025</label>
				</div>
				<div className="grid grid-cols-3 justify-between">
					<div className="grid gap-1 uppercase">
						<a href="">Home</a>
						<a href="">Shop</a>
						<a href="">About</a>
					</div>
					<div className="grid gap-1 uppercase">
						<a href="">contact</a>
						<a href="">terms</a>
						<a href="">policy</a>
					</div>
					<div className="grid gap-1 uppercase">
						<a href="">instagram</a>
						<a href="">tiktok</a>
						<a href="">facebook</a>
					</div>
				</div>

				<div className="grid gap-2 justify-end">
					<p className="text-[0.95vw]">
						Text us - your 24/7 immunity consultants
					</p>
					<div className="border-[1.5px] border-white rounded-md flex items-center px-4 w-fit">
						<span className="text-[max(16px,2.4vw)]">+1 99xxxxxxxx</span>
					</div>
				</div>
			</div>
		</>
	)
}

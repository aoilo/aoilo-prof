import Image from "next/image";

export default function Home() {
	return (
		<div>
			<div>
				<h1>aoi</h1>
				<h2>vrcだとstub</h2>
				<p>キモオタからオタク要素がなくなってただのキモになってしまった</p>
			</div>

			<div>
				{/* <div>
					<button>
						<img src="twitter-icon.png" />
					</button>
					<button>
						<img src="github-icon.png" />
					</button>
					<button>
						<img src="heart-icon.png" />
					</button>
				</div> */}

				<div id="twitter-content">
					{/* <img src="/dummy.jpg" alt="Twitter thumbnail" /> */}
					<h3>Twitter</h3>
					<p>@_hin4ta_</p>
				</div>

				<div id="github-content">
					{/* <img src="/dummy.jpg" alt="GitHub thumbnail" /> */}
					<h3>GitHub</h3>
					<p>プロジェクトや作品についての情報</p>
				</div>

				<div id="heart-content">
					{/* <img src="/dummy.jpg" alt="VRChat thumbnail" /> */}
					<h3>VRChat</h3>
					<p>VRChatのアカウント</p>
				</div>
			</div>

			<footer>
				{/* <p>Made by aoi, with Tailwind CSS.</p> */}
			</footer>
		</div>
	);
}

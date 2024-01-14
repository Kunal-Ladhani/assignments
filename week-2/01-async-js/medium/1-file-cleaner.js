const fs = require("fs");

function removeExtraSpaces(data) {
	if (typeof data !== "string") {
		throw new Error("Data should be of string type");
	}

	console.log("data = ", data);

	// corner case
	if (data.length == 0) {
		return "";
	}

	let ans = "",
		n = data.length,
		spaceFlag = false; // Flag to check if spaces have occurred
	for (let i = 0; i < n; ++i) {
		if (data[i] !== " ") {
			if (spaceFlag) {
				if (data[i] === "." || data[i] === "?" || data[i] === ",") {
					// Do nothing
				} else {
					ans += " ";
				}
				spaceFlag = false;
			}
			ans += data[i];
		} else if (i > 0 && data[i - 1] !== " ") {
			spaceFlag = true;
		}
	}
	// TC = O(N)
	// SC = O(1)
	console.log("ans = ", ans);
	return ans;
}

let content1 = "",
	content2 = "",
	FILE_PATH = "./medium/file-to-clean.txt";
const data = fs.readFileSync(FILE_PATH, { encoding: "utf-8" });

content1 = removeExtraSpaces(data);

fs.writeFileSync(FILE_PATH, content1, { encoding: "utf-8" });

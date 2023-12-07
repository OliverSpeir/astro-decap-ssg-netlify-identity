export default function images() {
	return (tree) => {
		function traverse(node) {
			if (node.type === "image") {
				if (node.url.startsWith("/")) {
					node.url = node.url.substring(1);
				}
			}
			if (node.children) {
				node.children.forEach(traverse);
			}
		}

		traverse(tree);
	};
}

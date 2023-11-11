export const formatSeconds = (second: number): string => {
    const minutes = Math.floor(second / 60);
    const hours = Math.floor(minutes / 60);
	if (hours === 1) {
		return `1 hour ago`
	} else if (hours > 2) {
		return `${hours} hours ago`
	} else {
		return `${minutes} minutes ago`
	}
};

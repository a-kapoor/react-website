export default function BlogCard(props) {

    const baseUrl = (process.env.NODE_ENV === 'production') ? process.env.REACT_APP_BASE_API_SERVER :
        process.env.REACT_APP_BASE_API_LOCAL;

    const generateTags = (tags) => {
        if (Array.isArray(tags) && tags.length > 0) {
            return tags.map(tag => {
                return (
                    <div class="text-xs mr-2 py-1.5 px-4 text-gray-600 bg-blue-100 rounded-2xl">
                        #{tag}
                    </div>
                )
            });
        }
    }

    const  getCardHeaderImgSrc = (url) => {
        return `${baseUrl}/api/${url}`
    }

    return (
        <div class="w-full block h-full">
            <img alt={props.data.title} src={getCardHeaderImgSrc(props.data.image)} class="max-h-40 w-full object-cover" />
            <div class="bg-white dark:bg-gray-800 w-full p-4">
                <p class="text-gray-800 dark:text-white text-xl font-medium mb-2">
                    {props.data.title}
                </p>
                <p class="text-gray-400 dark:text-gray-300 font-light text-md">
                    {props.data.description}
                </p>
                <div class="flex flex-wrap justify-starts items-center mt-4">
                    {generateTags(props.data.tags)}
                </div>
            </div>
        </div>
    )
}

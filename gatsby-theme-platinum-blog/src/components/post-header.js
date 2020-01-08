/** @jsx jsx */
import { jsx } from "theme-ui";
import { Heading, Box, Text } from "@theme-ui/components";

const TagList = ({
  tags
}) => (
  <ul sx={{
    variant: "styles.inlineList",
    li: {
      m: 1,
      px: 2,
      borderRadius: "default",
      display: "inline-block",
      backgroundColor: "gray.4"
    }
  }}>
    {tags.map((tag)=>(
      <li>{tag}</li>
    ))}
  </ul>
)

const PostHeader = ({
  title,
  date,
  tags
}) => {
  return(
    <Box sx={{
      textAlign: "center",
      my: [3,4],
    }}>
      <Heading as="h1" sx={{
        fontSize: [7,8],
        my: 2,
      }}>
        {title}
      </Heading>
      <Text sx={{
        my: 2,
        fontSize: 3,
        color: "gray.6",
        fontStyle: "italic"
      }}>
        {date}
      </Text>
      <TagList tags={tags} />
    </Box>
  )
}


export default PostHeader

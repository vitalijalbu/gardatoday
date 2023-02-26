import Link from "next/link";
import { IconClock } from "@tabler/icons-react";

const StoryCard = ({data}) => {
  return (
    <div className="tc-post-overlay-default text-white">
  <div className="img th-450 img-cover">
    <img src={data.cover_image ? data.cover_image[0].url : '/images/placeholder.svg'} alt="" />
  </div>
  <div className="content p-15">
    <h5 className="mb-30">
        {data.title}
    </h5>
    <div className="meta-bot text-white">
      <a href="#" className="fsz-12px">
        <IconClock />
        {data.postDate}
      </a>
    </div>
  </div>
</div>

  

            );
};

export default StoryCard;
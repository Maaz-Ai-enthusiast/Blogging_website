import Ads from "./Adds";
import Button from "./Button";
import PostCard from "./PostCard";
import card1 from "../../../images/m4.png";
import card2 from "../../../images/m5.png";
import card3 from "../../../images/m6.png";
import card4 from "../../../images/m7.png";
import card5 from "../../../images/m8.png";
import card6 from "../../../images/m9.png";
import card7 from "../../../images/m10.png";
import card8 from "../../../images/m11.png";
import authorimg from "../../../images/m3.png";
import authorimg1 from "../../../images/m2.png";

const PostCon = () => {
  return (
    <>
      <div>
        <p className="ml-[70px] text-2xl my-5">
          <strong>Latest Post</strong>
        </p>
        <div className="h-[1504px] w-[1216px] flex mx-auto flex-wrap">
          <PostCard
            isrc={card1}
            ialt="Image 1"
            para="The Impact of Technology on the Workplace: How Technology is Changing"
            authorimg={authorimg}
            auialt="Image 2"
            authorName="John Smith"
            date="July 12, 2021"
          />
          <PostCard
            isrc={card2}
            ialt="Image 1"
            para="The Impact of Technology on the Workplace: How Technology is Changing"
            authorimg={authorimg1}
            auialt="Image 2"
            authorName="John Smith"
            date="July 12, 2021"
          />

          <PostCard
            isrc={card3}
            ialt="Image 1"
            para="The Impact of Technology on the Workplace: How Technology is Changing"
            authorimg={authorimg}
            auialt="Image 2"
            authorName="John Smith"
            date="July 12, 2021"
          />

          <PostCard
            isrc={card4}
            ialt="Image 1"
            para="The Impact of Technology on the Workplace: How Technology is Changing"
            authorimg={authorimg1}
            auialt="Image 2"
            authorName="John Smith"
            date="July 12, 2021"
          />

          <PostCard
            isrc={card5}
            ialt="Image 1"
            para="The Impact of Technology on the Workplace: How Technology is Changing"
            authorimg={authorimg1}
            auialt="Image 2"
            authorName="John Smith"
            date="July 12, 2021"
          />

          <PostCard
            isrc={card6}
            ialt="Image 1"
            para="The Impact of Technology on the Workplace: How Technology is Changing"
            authorimg={authorimg}
            auialt="Image 2"
            authorName="John Smith"
            date="July 12, 2021"
          />

          <PostCard
            isrc={card7}
            ialt="Image 1"
            para="The Impact of Technology on the Workplace: How Technology is Changing"
            authorimg={authorimg1}
            auialt="Image 2"
            authorName="John Smith"
            date="July 12, 2021"
          />

          <PostCard
            isrc={card8}
            ialt="Image 1"
            para="The Impact of Technology on the Workplace: How Technology is Changing"
            authorimg={authorimg}
            auialt="Image 2"
            authorName="John Smith"
            date="July 12, 2021"
          />

          <PostCard
            isrc={card1}
            ialt="Image 1"
            para="The Impact of Technology on the Workplace: How Technology is Changing"
            authorimg={authorimg1}
            auialt="Image 2"
            authorName="John Smith"
            date="July 12, 2021"
          />
        </div>
        <div className="flex justify-center my-4">
          <Button btntext="View All Posts" />
        </div>

        <Ads 
        />
      </div>
    </>
  );
};

export default PostCon;

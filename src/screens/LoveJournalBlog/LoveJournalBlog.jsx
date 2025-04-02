import React from "react";
import { useLocation, useParams } from "react-router";
import LoveJournalBlogBanner from "../../sections/LoveJounalBlog/LoveJournalBlogBanner/LoveJournalBlogBanner";
import LoveJournalBlogContent from "../../sections/LoveJounalBlog/LoveJournalBlogContent/LoveJournalBlogContent";
import RelatedArticles from "../../sections/LoveJounalBlog/RelatedArticles/RelatedArticles";
import CommentSection from "../../sections/LoveJounalBlog/CommentSection/CommentSection";

function LoveJournalBlog() {
  let { id } = useParams();
  const { state } = useLocation();

  console.log(id);

  return (
    <>
      <LoveJournalBlogBanner item={state} />
      <LoveJournalBlogContent />
      <CommentSection />
      <RelatedArticles />
    </>
  );
}

export default LoveJournalBlog;

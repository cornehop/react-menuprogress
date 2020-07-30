export const scrollTo = (id, block) => {
  console.log(document.getElementById(id));
  document.getElementById(id).scrollIntoView({
    block: block,
  });
};

export const getRenderedParagraphs = (paragraphData) => {
  const paragraphs = [];
  const { height: headerHeight } = getDimensions(document.getElementById("app-header"));
  for (const paragraph of paragraphData) {
    const element = document.getElementById(`story-${paragraph.id}`);
    if (!element) {
      return;
    }
    const boundingSizes = element.getBoundingClientRect();
    const position = (element.offsetTop + boundingSizes.height) - headerHeight;
    paragraphs.push({
      ...paragraph,
      position
    });
  }
  return paragraphs;
}

export const getDimensions = ele => {
  const { height } = ele.getBoundingClientRect();
  const { offsetTop } = ele;
  const offsetBottom = offsetTop + height;

  return {
    height,
    offsetTop,
    offsetBottom,
  };
};

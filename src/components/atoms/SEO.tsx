type Props = {
  title: string;
  description?: string;
  sitename?: string;
};

// SEO - Search engine optimization
const SEO = ({ title, description, sitename = "React App" }: Props) => {
  document.title = `${title} | ${sitename}`;

  return (
    <>
      <meta name="description" content={description} />
    </>
  );
};

export default SEO;

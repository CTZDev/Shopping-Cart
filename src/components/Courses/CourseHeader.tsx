interface CourseHeaderProps {
  title: string;
}

type Props = CourseHeaderProps;

const CourseHeader: React.FC<Props> = ({ title }) => {
  return (
    <>
      <header className='pb-4'>
        <h3 className='font-bold'>{title}</h3>
      </header>
    </>
  );
};

export default CourseHeader;

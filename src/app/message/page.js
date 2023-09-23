import GetMessage from "@/lib/GetMessage";

export const metadata = {
  title: "Message",
  description: "list of messages",
};

const Message = async ({ searchParams }) => {
  const data = await GetMessage();
  let mess = false;
  if (searchParams.pass === process.env.SEARCHPASS) {
    mess = true;
  }
  // console.log(data);

  return (
    <div>
      <h1 className="text-4xl text-center font-bold text-gray-900 dark:text-white">
        MESSAGES
      </h1>
      {!mess && <h1 className="h-96 text-center pt-10">Hello There!!!</h1>}
      {mess &&
        data.map((item) => {
          // const date = item.createdAt.toDateString()
          const date = new Date(item.createdAt).toDateString();
          // console.log(date);
          return (
            <div
              className="block m-5 p-6 bg-white border border-gray-200 rounded-lg shadow dark:bg-gray-800 dark:border-gray-700"
              key={item._id}
            >
              <h5 className="mb-2 text-md text-center font-normal tracking-tight text-gray-900 dark:text-white">
                Date: {date}
              </h5>
              <h5 className="mb-2 text-lg font-bold tracking-tight text-gray-900 dark:text-white">
                Name: {item.name}
              </h5>
              <h5 className="mb-2 text-lg font-bold tracking-tight text-gray-900 dark:text-white">
                Company: {item.company && item.company}
              </h5>
              <h5 className="mb-3 text-lg font-bold tracking-tight text-gray-900 dark:text-white">
                Email: {item.email}
              </h5>
              <h5 className="mb-1 text-lg font-bold tracking-tight text-gray-900 dark:text-white">
                Message
              </h5>
              <p className="font-normal text-gray-700 dark:text-gray-400">
                {item.message}
              </p>
            </div>
          );
        })}
    </div>
  );
};

export default Message;

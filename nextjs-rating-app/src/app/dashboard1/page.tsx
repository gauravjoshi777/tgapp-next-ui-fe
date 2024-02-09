
export default function Dashboard() {
    return (
      <main className="p-4 m-4 border">
        {/*container */}
        <div className="p-4 border-collapse border">
            {/*section row 1 */}
          <div className="text-center p-4 border">
            <h1 className="text-2xl">Dashboard page</h1>
          </div>
          {/*section row 2 */}
          <div className="p-4 border">
            <p>
              Welcome to the dashboard page. This is a protected route. You can only access this page if you are logged in.
            </p>
          </div>
          {/*section row 3 */}
          <div className="flex justify-between border p-4">          
            {/* first box            */}
            <div className="border w-1/3 m-4 p-4 shadow-lg shadow-green-500 rounded-xl">
              <div className="border w-full bg-green-700 p-4">
                <div className="text-center"> box header</div>
              </div>
              <div className="border w-full bg-green-200 p-4 text-green-700">
                <div className="border border-green-200 hover:bg-slate-400 hover:text-white p-2 m-2 shadow-md shadow-green-400">
                  box body row-1
                </div>
                <div className="border border-green-200 hover:bg-slate-400 hover:text-white p-2 m-2 shadow-md shadow-green-400">
                  box body row-2
                </div>
                <div className="border border-green-200 hover:bg-slate-400 hover:text-white p-2 m-2 shadow-md shadow-green-400">
                  box body row-3
                </div>
              </div>
              <div className="border w-full bg-green-500 p-4">
                <div className="text-center">box footer</div>
              </div>
            </div>
            
            {/* second box            */}
            <div className="border w-1/3 m-4 p-4 shadow-lg shadow-violet-500 rounded-xl">
              <div className="border w-full bg-violet-700 p-4">
                <div className="text-center"> box header</div>
              </div>
              <div className="border w-full bg-violet-200 p-4 text-violet-700">
                <div className="border border-violet-200 hover:bg-slate-400 hover:text-white p-2 m-2 shadow-md shadow-violet-400">
                  box body row-1
                </div>
                <div className="border border-violet-200 hover:bg-slate-400 hover:text-white p-2 m-2 shadow-md shadow-violet-400">
                  box body row-2
                </div>
                <div className="border border-violet-200 hover:bg-slate-400 hover:text-white p-2 m-2 shadow-md shadow-violet-400">
                  box body row-3
                </div>
              </div>
              <div className="border w-full bg-violet-600 p-4">
                <div className="text-center">box footer</div>
              </div>
            </div>
            
            {/* first box            */}
            <div className="border w-1/3 m-4 p-4 shadow-lg shadow-red-500 rounded-xl">
              <div className="border w-full bg-red-700 p-4">
                <div className="text-center"> box header</div>
              </div>
              <div className="border w-full bg-red-200 p-4 text-red-700">
                <div className="border border-red-200 hover:bg-slate-400 hover:text-white p-2 m-2 shadow-md shadow-red-400">
                  box body row-1
                </div>
                <div className="border border-red-200 hover:bg-slate-400 hover:text-white p-2 m-2 shadow-md shadow-red-400">
                  box body row-2
                </div>
                <div className="border border-red-200 hover:bg-slate-400 hover:text-white p-2 m-2 shadow-md shadow-red-400">
                  box body row-3
                </div>
              </div>
              <div className="border w-full bg-red-500 p-4">
                <div className="text-center">box footer</div>
              </div>
            </div>
            
          </div>
          <div className="p-4 border">
            <p>
              Here to show details of cliked box
            </p>
            <div className="border m-4 p-4 shadow-lg shadow-blue-500 rounded-xl">
              <div className="border w-full bg-blue-500 p-4">
                <div className="text-center"> Details header</div>
              </div>
              <div className="border w-full bg-blue-200 p-4 text-blue-700">
                <div className="border border-blue-200 hover:bg-slate-400 hover:text-white p-2 m-2 shadow-md shadow-blue-400">
                  Deatils body row-1
                </div>             
              </div>            
            </div>
            
          </div>
        </div>
      </main>
    )
  }
  
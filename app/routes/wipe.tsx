import { useEffect, useState } from "react";
import { Link, useNavigate } from "react-router";
import { usePuterStore } from "~/lib/putter";

const WipeApp = () => {
  const { auth, isLoading, error, clearError, fs, ai, kv } = usePuterStore();
  const navigate = useNavigate();
  const [files, setFiles] = useState<FSItem[]>([]);
  const [isWiping, setIsWiping] = useState(false);

  const loadFiles = async () => {
    const files = (await fs.readDir("./")) as FSItem[];
    setFiles(files);
  };

  useEffect(() => {
    loadFiles();
  }, []);

  useEffect(() => {
    if (!isLoading && !auth.isAuthenticated) {
      navigate("/auth?next=/wipe");
    }
  }, [isLoading]);

  const handleDelete = async () => {
    const confirmed = window.confirm(
      "This will permanently delete all your resumes and data. This cannot be undone. Continue?"
    );
    if (!confirmed) return;

    setIsWiping(true);
    await Promise.all(files.map((file) => fs.delete(file.path)));
    await kv.flush();
    await loadFiles();
    setIsWiping(false);
  };

  if (isLoading) {
    return (
      <div className="min-h-screen flex items-center justify-center bg-gray-50">
        <p className="text-gray-500">Loading...</p>
      </div>
    );
  }

  if (error) {
    return (
      <div className="min-h-screen flex items-center justify-center bg-gray-50 px-4">
        <div className="bg-red-50 border border-red-200 text-red-700 rounded-xl px-6 py-4">
          Error: {error}
        </div>
      </div>
    );
  }

  return (
    <main className="min-h-screen bg-gray-50 px-4 py-10 sm:py-16">
      <div className="max-w-2xl mx-auto">
        <Link
          to="/"
          className="inline-flex items-center gap-2 text-gray-600 hover:text-gray-900 text-sm font-medium mb-6 transition-colors"
        >
          <img src="/icons/back.svg" alt="" className="w-2.5 h-2.5" />
          Back to Homepage
        </Link>

        <div className="bg-white rounded-2xl shadow-sm border border-gray-200 p-6 sm:p-8">
          <h1 className="text-2xl sm:text-3xl font-bold text-gray-900 mb-1">
            Wipe app data
          </h1>
          <p className="text-sm text-gray-500 mb-6">
            Authenticated as{" "}
            <span className="font-medium text-gray-700">
              {auth.user?.username}
            </span>
          </p>

          <div className="border-t border-gray-100 pt-6">
            <h2 className="text-sm font-semibold text-gray-700 mb-3">
              Existing files {files.length > 0 && `(${files.length})`}
            </h2>

            {files.length === 0 ? (
              <p className="text-sm text-gray-400 italic mb-6">
                No files found.
              </p>
            ) : (
              <div className="flex flex-col gap-2 max-h-64 overflow-y-auto mb-6 pr-1">
                {files.map((file) => (
                  <div
                    key={file.id}
                    className="flex items-center gap-3 bg-gray-50 rounded-lg px-3 py-2 text-sm text-gray-600 break-all"
                  >
                    <img src="/icons/info.svg" alt="" className="w-4 h-4 flex-shrink-0 opacity-50" />
                    <span className="truncate">{file.name}</span>
                  </div>
                ))}
              </div>
            )}

            <button
              onClick={handleDelete}
              disabled={isWiping || files.length === 0}
              className="w-full sm:w-auto bg-red-500 hover:bg-red-600 disabled:bg-gray-300 disabled:cursor-not-allowed text-white font-semibold px-6 py-3 rounded-xl transition-colors"
            >
              {isWiping ? "Wiping..." : "Wipe app data"}
            </button>
          </div>
        </div>
      </div>
    </main>
  );
};

export default WipeApp;
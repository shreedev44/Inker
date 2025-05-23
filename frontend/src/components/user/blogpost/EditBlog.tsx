import { Editor } from "./Editor";
import { Card } from "@/components/ui/card";
import { Button } from "@/components/ui/button";
import { useBlogEditorStore } from "@/store/useBlogEditorStore";
import { useEffect } from "react";
import { useNavigate } from "react-router-dom";
import Loader from "../common/Loader";

export default function EditBlog() {
  const {editingBlogId, isLoading} = useBlogEditorStore()
  const navigate = useNavigate()

  useEffect(() => {
    if (!editingBlogId) {
      navigate(-1)
    }
  },[editingBlogId, navigate])

  if (isLoading) {
      return <div className="flex items-center justify-center h-screen">
        <Loader className="max-w-[200px]" />
      </div>
    }
  
  return (
    <div className="flex justify-center p-8 md:p-8 min-h-screen w-full md:w-auto">
      <Card className="w-full md:w-full md:max-w-3xl border-0 md:border rounded-none md:rounded-xl bg-background">
        <div className="px-4 py-2 md:px-6 md:py-4 border-b border-border flex justify-between items-center">
          <div className="flex gap-2">
            <Button
              variant="ghost"
              className={
                "relative px-2 py-1 md:px-4 md:py-2 text-sm font-medium transition text-primary after:w-full after:h-[2px] after:bg-primary after:absolute after:bottom-0 after:left-0"
              }
            >
              Edit Post
            </Button>
          </div>
        </div>

        <div className="flex-1 w-full p-2 md:p-6 md:space-y-6">
            <Editor isEditMode={true} /> 
        </div>
      </Card>
    </div>
  );
}
"use client";
import ChatInput from "@/components/chat-input";
import CodeEditor from "@/components/editor/code-editor";
import OutputSection from "@/components/output-section";
import ProblemDescription from "@/components/problems-list/problem-description";
import {
    ResizableHandle,
    ResizablePanel,
    ResizablePanelGroup,
} from "@/components/ui/resizable"
import { TooltipWrapper } from "@/components/utils/tooltip-wrapper";
import { Minus, RotateCcw, X } from "lucide-react";

const Playground = () => {

    return (
        <div className="h-screen">
            <ResizablePanelGroup

                direction="horizontal"
                className="max-w-screen border "
            >
                <ResizablePanel defaultSize={40}>
                    <ResizablePanelGroup direction="vertical">
                        <ResizablePanel defaultSize={50}>
                            <div className="flex flex-col h-full overflow-y-auto p-4 custom-scrollbar">
                                <ProblemDescription />
                                <div className="h-[20px]" />
                            </div>
                        </ResizablePanel>
                        <ResizableHandle withHandle />
                        <ResizablePanel className="shadow-sm" defaultSize={50}>
                            <div className="flex items-center justify-between border-b p-3">
                                <span className="text-sm font-semibold">Assistant</span>
                                <div className="flex items-center gap-2">
                                    <span className="cursor-pointer">
                                        <TooltipWrapper text={'Clear chat'} component={<RotateCcw size={16} />} />

                                    </span>
                                    <span className="cursor-pointer">
                                        <TooltipWrapper text={'Collapse'} component={<Minus size={16} />} />

                                    </span>
                                </div>
                            </div>
                            <div className="flex flex-col w-full h-full items-center">
                                <ChatInput />
                            </div>
                        </ResizablePanel>
                    </ResizablePanelGroup>
                </ResizablePanel>
                <ResizableHandle withHandle />
                <ResizablePanel defaultSize={60}>
                    <ResizablePanelGroup direction="vertical">
                        <ResizablePanel className="p-[0.5rem]" defaultSize={85}>

                            <div className="flex flex-col h-full items-center justify-center rounded-xl">

                                <CodeEditor />
                            </div>
                        </ResizablePanel>
                        <ResizableHandle withHandle />
                        <ResizablePanel className="p-2" defaultSize={15}>
                            <div className="w-full h-full items-center">
                                <OutputSection />
                            </div>
                        </ResizablePanel>
                    </ResizablePanelGroup>
                </ResizablePanel>
                <ResizableHandle />

            </ResizablePanelGroup>
        </div>
    )
}

export default Playground;
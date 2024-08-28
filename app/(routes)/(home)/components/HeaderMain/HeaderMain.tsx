import { Button } from "@/components/ui/button";
import {
  Dialog,
  DialogContent,
  DialogDescription,
  DialogHeader,
  DialogTitle,
  DialogTrigger,
} from "@/components/ui/dialog";

import {
    DropdownMenu,
    DropdownMenuContent,
    DropdownMenuItem,
    DropdownMenuLabel,
    DropdownMenuSeparator,
    DropdownMenuTrigger,
  } from "@/components/ui/dropdown-menu"
import { ChevronDown, Icon } from "lucide-react";
import { dataHeaderMain } from "./HeaderMain.data";
import { useState } from "react";
  

export function HeaderMain() {
    const [typeElement, setTypeElement] = useState<"password" | "folder" | "">();
    const [openDialog, setOpenDialog] = useState(false);
    const [openDropdown, setOpenDropdown] = useState(false)

    const closeDialogAndDropdown = () => {
        setOpenDialog(false);
        setOpenDropdown(false);
    }

  return (
    <div className="flex justify-between items-center">
      <h1 className="text-xl mf_text-3xl font-semibold">
        Todas las cajas fuertes
      </h1>
      <Dialog>
        <DropdownMenu>
            <DropdownMenuTrigger asChild>
                <Button>
                    Nueva <ChevronDown />
                </Button>
            </DropdownMenuTrigger>
            <DropdownMenuContent className="p-0">
                <DropdownMenuLabel>
                    <DialogTrigger asChild>
                        <div className="flex flex-col">
                            {dataHeaderMain.map(({ icon: Icon, typeElement, text }) => (
                                <Button 
                                    key={typeElement} 
                                    className="justify-start"
                                    variant="ghost"
                                    onClick={() => setTypeElement(typeElement)}
                                >
                                    <Icon className="w-4 h-4 mr-2" />
                                    {text}
                                </Button>
                            ))}
                            <p>Contraseña</p>
                        </div>
                    </DialogTrigger>
                </DropdownMenuLabel>
            </DropdownMenuContent>
        </DropdownMenu>
        <DialogContent className="sm:max-w-[825px]">
            <DialogHeader>
                <DialogTitle>Nuevo elemento</DialogTitle>
            </DialogHeader>
        </DialogContent>
      </Dialog>
    </div>
  );
}

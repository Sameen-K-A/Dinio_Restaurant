import { IconSparkles } from "@tabler/icons-react"
import { Button } from '@/components/ui/button'
import { useSidebar } from '@/components/ui/sidebar'

export function SubscriptionCard() {
  const { state } = useSidebar()

  return (
    <div
      className="relative overflow-hidden rounded-lg bg-gradient-to-br from-purple-600 to-indigo-800 text-white shadow-lg transition-all duration-300 ease-in-out group-data-[collapsible=icon]/sidebar-wrapper:hidden"
      data-state={state}
    >
      <div className="absolute inset-0 z-0 opacity-20">
        <IconSparkles className="absolute -top-8 -left-8 size-24 text-purple-300" />
        <IconSparkles className="absolute -bottom-4 -right-4 size-20 text-indigo-300" />
      </div>
      <div className="relative z-10 flex flex-col items-start gap-3 p-4">
        <div className="flex items-center gap-2 text-lg font-semibold">
          <IconSparkles className="size-5" />
          Upgrade Now
        </div>
        <p className="text-sm text-purple-100">
          Unlock premium features and boost your productivity.
        </p>
        <Button
          variant="secondary"
          className="w-full bg-white text-purple-700 hover:bg-gray-100"
        >
          Learn More
        </Button>
      </div>
    </div>
  )
};
"use client"

import LoaderUI from '@/components/LoaderUI';
import { useUserRole } from '@/hooks/useUserRole';
import { useRouter } from 'next/navigation';
import InterviewerScheduleUI from './InterviewerScheduleUI';

function SchedulePage() {
  const router = useRouter();

  const {isInterviewer, isLoading} = useUserRole();

  if (isLoading) return <LoaderUI/>
  if (!isInterviewer) return router.push('/')

  return (

    <InterviewerScheduleUI/>
  )
}

export default SchedulePage
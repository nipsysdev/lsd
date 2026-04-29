# Complex Application Examples

Real-world examples showing multiple LSD components working together with state management.

## Example 1: Task Management Board

Complete feature showing multiple LSD components with shared state, filtering, and CRUD operations.

```typescript
'use client'

import { useState } from 'react'
import {
  Button,
  Card,
  CardContent,
  Input,
  Select,
  SelectContent,
  SelectItem,
  SelectTrigger,
  SelectValue,
  Typography,
} from '@nipsys/lsd'
import { PlusIcon, TrashIcon, CheckIcon } from '@phosphor-icons/react'

interface Task {
  id: string
  title: string
  description: string
  status: 'todo' | 'in-progress' | 'done'
  priority: 'low' | 'medium' | 'high'
  dueDate?: string
  createdAt: string
  tags: string[]
}

export function TaskBoard() {
  const [tasks, setTasks] = useState<Task[]>([
    {
      id: '1',
      title: 'Design system components',
      description: 'Create foundational UI components for the design system',
      status: 'todo',
      priority: 'high',
      dueDate: '2024-02-01',
      createdAt: '2024-01-15',
      tags: ['design', 'ui'],
    },
    {
      id: '2',
      title: 'Implement user auth flow',
      description: 'Set up authentication with login, register, and password reset',
      status: 'in-progress',
      priority: 'medium',
      dueDate: '2024-01-25',
      createdAt: '2024-01-14',
      tags: ['auth', 'backend'],
    },
    {
      id: '3',
      title: 'Write documentation',
      description: 'Document all public APIs and component usage',
      status: 'done',
      priority: 'low',
      createdAt: '2024-01-10',
      tags: ['docs'],
    },
    {
      id: '4',
      title: 'Set up CI/CD pipeline',
      description: 'Configure automated testing and deployment',
      status: 'todo',
      priority: 'medium',
      dueDate: '2024-02-05',
      createdAt: '2024-01-16',
      tags: ['devops'],
    },
  ])

  const [newTaskTitle, setNewTaskTitle] = useState('')
  const [newTaskDescription, setNewTaskDescription] = useState('')
  const [newTaskPriority, setNewTaskPriority] = useState<'low' | 'medium' | 'high'>('medium')
  const [filterStatus, setFilterStatus] = useState<'all' | 'todo' | 'in-progress' | 'done'>('all')
  const [filterPriority, setFilterPriority] = useState<'all' | 'low' | 'medium' | 'high'>('all')
  const [searchTerm, setSearchTerm] = useState('')
  const [showAddForm, setShowAddForm] = useState(false)

  const addTask = () => {
    if (!newTaskTitle.trim()) return

    const newTask: Task = {
      id: Date.now().toString(),
      title: newTaskTitle,
      description: newTaskDescription,
      status: 'todo',
      priority: newTaskPriority,
      createdAt: new Date().toISOString().split('T')[0],
      tags: [],
    }

    setTasks(prev => [newTask, ...prev])
    setNewTaskTitle('')
    setNewTaskDescription('')
    setNewTaskPriority('medium')
    setShowAddForm(false)
  }

  const updateTaskStatus = (taskId: string, newStatus: Task['status']) => {
    setTasks(prev =>
      prev.map(task =>
        task.id === taskId ? { ...task, status: newStatus } : task
      )
    )
  }

  const updateTaskPriority = (taskId: string, newPriority: Task['priority']) => {
    setTasks(prev =>
      prev.map(task =>
        task.id === taskId ? { ...task, priority: newPriority } : task
      )
    )
  }

  const deleteTask = (taskId: string) => {
    setTasks(prev => prev.filter(task => task.id !== taskId))
  }

  const duplicateTask = (taskId: string) => {
    const taskToDuplicate = tasks.find(task => task.id === taskId)
    if (!taskToDuplicate) return

    const duplicatedTask: Task = {
      ...taskToDuplicate,
      id: Date.now().toString(),
      title: `${taskToDuplicate.title} (Copy)`,
      status: 'todo',
      createdAt: new Date().toISOString().split('T')[0],
    }

    setTasks(prev => [duplicatedTask, ...prev])
  }

  const getPriorityColor = (priority: Task['priority']) => {
    switch (priority) {
      case 'high':
        return 'bg-destructive text-destructive-foreground'
      case 'medium':
        return 'bg-primary text-primary-foreground'
      case 'low':
        return 'bg-secondary text-secondary-foreground'
      default:
        return 'bg-secondary text-secondary-foreground'
    }
  }

  const getStatusColor = (status: Task['status']) => {
    switch (status) {
      case 'done':
        return 'border-destructive/50'
      case 'in-progress':
        return 'border-primary/50'
      default:
        return 'border-transparent'
    }
  }

  const filteredTasks = tasks.filter(task => {
    if (filterStatus !== 'all' && task.status !== filterStatus) return false
    if (filterPriority !== 'all' && task.priority !== filterPriority) return false
    if (searchTerm) {
      const searchLower = searchTerm.toLowerCase()
      return (
        task.title.toLowerCase().includes(searchLower) ||
        task.description.toLowerCase().includes(searchLower) ||
        task.tags.some(tag => tag.toLowerCase().includes(searchLower))
      )
    }
    return true
  })

  const taskStats = {
    total: tasks.length,
    todo: tasks.filter(t => t.status === 'todo').length,
    inProgress: tasks.filter(t => t.status === 'in-progress').length,
    done: tasks.filter(t => t.status === 'done').length,
  }

  return (
    <div className="space-y-(--lsd-spacing-larger)">
      <Card>
        <CardContent className="p-(--lsd-spacing-base)">
          <div className="flex items-center justify-between gap-(--lsd-spacing-base)">
            <div>
              <Typography variant="h1">Task Board</Typography>
              <Typography variant="body2" className="text-primary/80">
                Manage your tasks efficiently
              </Typography>
            </div>
            <Button onClick={() => setShowAddForm(!showAddForm)} variant="filled">
              <PlusIcon className="mr-(--lsd-spacing-smaller)" weight="duotone" />
              Add Task
            </Button>
          </div>

          <div className="flex gap-(--lsd-spacing-base) mt-(--lsd-spacing-base)">
            <div className="flex-1">
              <Input
                placeholder="Search tasks..."
                value={searchTerm}
                onChange={(e) => setSearchTerm(e.target.value)}
              />
            </div>
            <Select value={filterStatus} onValueChange={setFilterStatus}>
              <SelectTrigger className="w-[180px]">
                <SelectValue />
              </SelectTrigger>
              <SelectContent>
                <SelectItem value="all">All Tasks</SelectItem>
                <SelectItem value="todo">To Do</SelectItem>
                <SelectItem value="in-progress">In Progress</SelectItem>
                <SelectItem value="done">Done</SelectItem>
              </SelectContent>
            </Select>
            <Select value={filterPriority} onValueChange={setFilterPriority}>
              <SelectTrigger className="w-[150px]">
                <SelectValue />
              </SelectTrigger>
              <SelectContent>
                <SelectItem value="all">All Priorities</SelectItem>
                <SelectItem value="high">High</SelectItem>
                <SelectItem value="medium">Medium</SelectItem>
                <SelectItem value="low">Low</SelectItem>
              </SelectContent>
            </Select>
          </div>

          <div className="flex gap-(--lsd-spacing-base) mt-(--lsd-spacing-base)">
            <div className="flex-1 grid grid-cols-4 gap-(--lsd-spacing-smaller)">
              <div className="text-center">
                <Typography variant="h2">{taskStats.total}</Typography>
                <Typography variant="label1" className="text-primary/80">Total</Typography>
              </div>
              <div className="text-center">
                <Typography variant="h2">{taskStats.todo}</Typography>
                <Typography variant="label1" className="text-primary/80">To Do</Typography>
              </div>
              <div className="text-center">
                <Typography variant="h2">{taskStats.inProgress}</Typography>
                <Typography variant="label1" className="text-primary/80">In Progress</Typography>
              </div>
              <div className="text-center">
                <Typography variant="h2">{taskStats.done}</Typography>
                <Typography variant="label1" className="text-primary/80">Done</Typography>
              </div>
            </div>
          </div>
        </CardContent>
      </Card>

      {showAddForm && (
        <Card>
          <CardContent className="p-(--lsd-spacing-base)">
            <div className="space-y-(--lsd-spacing-base)">
              <Input
                placeholder="Task title..."
                value={newTaskTitle}
                onChange={(e) => setNewTaskTitle(e.target.value)}
                onKeyDown={(e) => e.key === 'Enter' && addTask()}
                className="text-lg"
              />
              <Input
                placeholder="Task description (optional)..."
                value={newTaskDescription}
                onChange={(e) => setNewTaskDescription(e.target.value)}
                onKeyDown={(e) => e.key === 'Enter' && addTask()}
              />
              <div className="flex gap-(--lsd-spacing-base)">
                <Select value={newTaskPriority} onValueChange={setNewTaskPriority}>
                  <SelectTrigger className="flex-1">
                    <SelectValue />
                  </SelectTrigger>
                  <SelectContent>
                    <SelectItem value="low">Low Priority</SelectItem>
                    <SelectItem value="medium">Medium Priority</SelectItem>
                    <SelectItem value="high">High Priority</SelectItem>
                  </SelectContent>
                </Select>
                <Button onClick={addTask} variant="filled" className="flex-1">
                  <PlusIcon className="mr-(--lsd-spacing-smaller)" weight="duotone" />
                  Add Task
                </Button>
              </div>
            </div>
          </CardContent>
        </Card>
      )}

      <div className="space-y-(--lsd-spacing-base)">
        {filteredTasks.map(task => (
          <Card key={task.id} className={`border-l-4 ${getStatusColor(task.status)}`}>
            <CardContent className="p-(--lsd-spacing-base)">
              <div className="flex items-start justify-between gap-(--lsd-spacing-base)">
                <div className="flex-1">
                  <Typography variant="subtitle1" className={`mb-(--lsd-spacing-smallest) ${task.status === 'done' ? 'line-through text-primary/60' : ''}`}>
                    {task.title}
                  </Typography>
                  {task.description && (
                    <Typography variant="body2" className="text-primary/70 mb-(--lsd-spacing-smaller)">
                      {task.description}
                    </Typography>
                  )}
                  <div className="flex items-center gap-(--lsd-spacing-smaller) flex-wrap mt-(--lsd-spacing-small)">
                    <Select
                      value={task.status}
                      onValueChange={(value: Task['status']) => updateTaskStatus(task.id, value)}
                    >
                      <SelectTrigger className="w-[150px] h-8">
                        <SelectValue />
                      </SelectTrigger>
                      <SelectContent>
                        <SelectItem value="todo">To Do</SelectItem>
                        <SelectItem value="in-progress">In Progress</SelectItem>
                        <SelectItem value="done">Done</SelectItem>
                      </SelectContent>
                    </Select>

                    <Select
                      value={task.priority}
                      onValueChange={(value: Task['priority']) => updateTaskPriority(task.id, value)}
                    >
                      <SelectTrigger className="w-[130px] h-8">
                        <SelectValue />
                      </SelectTrigger>
                      <SelectContent>
                        <SelectItem value="high">High</SelectItem>
                        <SelectItem value="medium">Medium</SelectItem>
                        <SelectItem value="low">Low</SelectItem>
                      </SelectContent>
                    </Select>

                    <div className={`px-(--lsd-spacing-smaller) py-(--lsd-spacing-smallest) rounded text-xs ${getPriorityColor(task.priority)}`}>
                      {task.priority}
                    </div>

                    {task.dueDate && (
                      <Typography variant="label1" className="text-primary/70">
                        Due: {task.dueDate}
                      </Typography>
                    )}

                    {task.tags.length > 0 && (
                      <div className="flex gap-(--lsd-spacing-smallest)">
                        {task.tags.map(tag => (
                          <div key={tag} className="px-(--lsd-spacing-smaller) py-(--lsd-spacing-smallest) bg-secondary text-secondary-foreground rounded text-xs">
                            {tag}
                          </div>
                        ))}
                      </div>
                    )}
                  </div>
                </div>

                <div className="flex gap-(--lsd-spacing-smaller)">
                  {task.status !== 'done' && (
                    <Button
                      size="sm"
                      variant="ghost"
                      onClick={() => updateTaskStatus(task.id, 'done')}
                    >
                      <CheckIcon size={20} />
                    </Button>
                  )}
                  <Button
                    size="sm"
                    variant="ghost"
                    onClick={() => duplicateTask(task.id)}
                  >
                    <PlusIcon size={20} weight="duotone" />
                  </Button>
                  <Button
                    size="sm"
                    variant="ghost"
                    onClick={() => deleteTask(task.id)}
                    destructive
                  >
                    <TrashIcon size={20} weight="duotone" />
                  </Button>
                </div>
              </div>
            </CardContent>
          </Card>
        ))}
      </div>

      {filteredTasks.length === 0 && (
        <Card>
          <CardContent className="p-(--lsd-spacing-largest) text-center">
            <Typography variant="body1" className="text-primary/60">
              No tasks found matching your criteria.
            </Typography>
            <Typography variant="label1" className="text-primary/50 mt-(--lsd-spacing-smaller)">
              Create your first task or adjust your filters
            </Typography>
          </CardContent>
        </Card>
      )}
    </div>
  )
}
```

**Key Patterns Demonstrated:**
- Complex state management for task CRUD operations
- Multiple filtering criteria (status, priority, search)
- Conditional rendering and styling based on state
- Combining Button, Card, Select, Input with dynamic variants
- Dense UI layouts with proper LSD spacing
- Task statistics and real-time updates
- Duplicate task functionality

## Example 2: User Profile Form

Complex form showing validation, conditional fields, loading states, and feedback.

```typescript
'use client'

import { useState } from 'react'
import {
  Button,
  Card,
  CardContent,
  CardHeader,
  CardTitle,
  Input,
  Label,
  Select,
  SelectContent,
  SelectItem,
  SelectTrigger,
  SelectValue,
  Textarea,
  Switch,
  Alert,
  AlertDescription,
  AlertTitle,
  Typography,
  Progress,
} from '@nipsys/lsd'
import { EnvelopeIcon, PhoneIcon, FloppyDiskIcon, CheckCircleIcon, WarningIcon } from '@phosphor-icons/react'

interface FormData {
  name: string
  email: string
  phone: string
  role: 'developer' | 'designer' | 'manager' | 'qa'
  bio: string
  location: string
  website: string
  linkedin: string
  github: string
  timezone: string
  notifyEmail: boolean
  notifyPush: boolean
}

interface FormErrors {
  name?: string
  email?: string
  phone?: string
}

type LoadingState = 'idle' | 'validating' | 'saving' | 'success'

export function UserProfileForm() {
  const [formData, setFormData] = useState<FormData>({
    name: '',
    email: '',
    phone: '',
    role: 'developer',
    bio: '',
    location: '',
    website: '',
    linkedin: '',
    github: '',
    timezone: 'UTC',
    notifyEmail: true,
    notifyPush: false,
  })

  const [errors, setErrors] = useState<FormErrors>({})
  const [loadingState, setLoadingState] = useState<LoadingState>('idle')
  const [showSuccess, setShowSuccess] = useState(false)
  const [validationProgress, setValidationProgress] = useState(0)

  const validateForm = (): boolean => {
    const newErrors: FormErrors = {}

    if (!formData.name.trim()) {
      newErrors.name = 'Name is required'
    } else if (formData.name.trim().length < 2) {
      newErrors.name = 'Name must be at least 2 characters'
    }

    if (!formData.email.trim()) {
      newErrors.email = 'Email is required'
    } else if (!/^[^\s@]+@[^\s@]+\.[^\s@]+$/.test(formData.email)) {
      newErrors.email = 'Invalid email format'
    }

    if (!formData.phone.trim()) {
      newErrors.phone = 'Phone is required'
    } else if (!/^[\d\s\-\+\(\)]+$/.test(formData.phone)) {
      newErrors.phone = 'Invalid phone format'
    }

    setErrors(newErrors)
    return Object.keys(newErrors).length === 0
  }

  const handleSubmit = async (e: React.FormEvent) => {
    e.preventDefault()

    if (!validateForm()) return

    setLoadingState('validating')
    setValidationProgress(0)

    const progressInterval = setInterval(() => {
      setValidationProgress(prev => Math.min(prev + 20, 100))
    }, 200)

    setTimeout(() => {
      clearInterval(progressInterval)
      setLoadingState('saving')

      setTimeout(() => {
        setLoadingState('success')
        setShowSuccess(true)

        setTimeout(() => {
          setShowSuccess(false)
          setLoadingState('idle')
        }, 3000)
      }, 1500)
    }, 1000)
  }

  const handleFieldChange = (field: keyof FormData, value: string | boolean) => {
    setFormData(prev => ({ ...prev, [field]: value }))
    if (errors[field as keyof FormErrors]) {
      setErrors(prev => ({ ...prev, [field]: undefined }))
    }
  }

  const hasFieldError = (field: keyof FormErrors) => !!errors[field]

  const getFieldHelper = (field: keyof FormErrors) => {
    if (!hasFieldError(field)) {
      switch (field) {
        case 'name':
          return 'Enter your full name'
        case 'email':
          return 'Use your professional email address'
        case 'phone':
          return 'Include country code if applicable'
        default:
          return ''
      }
    }
    return errors[field]
  }

  const isFormValid = formData.name.trim() && formData.email.trim() && formData.phone.trim()

  return (
    <div className="max-w-2xl mx-auto space-y-(--lsd-spacing-base)">
      {showSuccess && (
        <Alert>
          <CheckCircleIcon size={20} weight="duotone" />
          <AlertTitle>Success!</AlertTitle>
          <AlertDescription>
            Your profile has been saved successfully.
          </AlertDescription>
        </Alert>
      )}

      <Card>
        <CardHeader>
          <CardTitle>User Profile</CardTitle>
        </CardHeader>
        <CardContent>
          <form onSubmit={handleSubmit} className="space-y-(--lsd-spacing-base)">
            <div className="space-y-(--lsd-spacing-base)">
              <div>
                <Label htmlFor="name">Full Name</Label>
                <div className="relative">
                  <Input
                    id="name"
                    placeholder="Enter your name"
                    value={formData.name}
                    onChange={(e) => handleFieldChange('name', e.target.value)}
                    className={hasFieldError('name') ? 'border-destructive' : ''}
                  />
                  {hasFieldError('name') && (
                    <WarningIcon className="absolute right-3 top-1/2 -translate-y-1/2 text-destructive" size={18} weight="duotone" />
                  )}
                </div>
                <Typography variant="label1" className={`mt-(--lsd-spacing-smallest) ${hasFieldError('name') ? 'text-destructive' : 'text-primary/70'}`}>
                  {getFieldHelper('name')}
                </Typography>
              </div>

              <div>
                <Label htmlFor="email">Email Address</Label>
                <div className="relative">
                  <EnvelopeIcon className="absolute left-3 top-1/2 -translate-y-1/2 text-primary/60" size={18} weight="duotone" />
                  <Input
                    id="email"
                    placeholder="you@example.com"
                    type="email"
                    value={formData.email}
                    onChange={(e) => handleFieldChange('email', e.target.value)}
                    className={`pl-10 ${hasFieldError('email') ? 'border-destructive' : ''}`}
                  />
                  {hasFieldError('email') && (
                    <WarningIcon className="absolute right-3 top-1/2 -translate-y-1/2 text-destructive" size={18} weight="duotone" />
                  )}
                </div>
                <Typography variant="label1" className={`mt-(--lsd-spacing-smallest) ${hasFieldError('email') ? 'text-destructive' : 'text-primary/70'}`}>
                  {getFieldHelper('email')}
                </Typography>
              </div>

              <div>
                <Label htmlFor="phone">Phone Number</Label>
                <div className="relative">
                  <PhoneIcon className="absolute left-3 top-1/2 -translate-y-1/2 text-primary/60" size={18} weight="duotone" />
                  <Input
                    id="phone"
                    placeholder="+1 (555) 123-4567"
                    type="tel"
                    value={formData.phone}
                    onChange={(e) => handleFieldChange('phone', e.target.value)}
                    className={`pl-10 ${hasFieldError('phone') ? 'border-destructive' : ''}`}
                  />
                  {hasFieldError('phone') && (
                    <WarningIcon className="absolute right-3 top-1/2 -translate-y-1/2 text-destructive" size={18} weight="duotone" />
                  )}
                </div>
                <Typography variant="label1" className={`mt-(--lsd-spacing-smallest) ${hasFieldError('phone') ? 'text-destructive' : 'text-primary/70'}`}>
                  {getFieldHelper('phone')}
                </Typography>
              </div>

              <div>
                <Label htmlFor="role">Role</Label>
                <Select
                  value={formData.role}
                  onValueChange={(value: FormData['role']) => handleFieldChange('role', value)}
                >
                  <SelectTrigger id="role">
                    <SelectValue />
                  </SelectTrigger>
                  <SelectContent>
                    <SelectItem value="developer">Developer</SelectItem>
                    <SelectItem value="designer">Designer</SelectItem>
                    <SelectItem value="manager">Manager</SelectItem>
                    <SelectItem value="qa">QA Engineer</SelectItem>
                  </SelectContent>
                </Select>
              </div>

              <div>
                <Label htmlFor="location">Location</Label>
                <Input
                  id="location"
                  placeholder="City, Country"
                  value={formData.location}
                  onChange={(e) => handleFieldChange('location', e.target.value)}
                />
              </div>

              <div>
                <Label htmlFor="bio">Bio</Label>
                <Textarea
                  id="bio"
                  placeholder="Tell us about yourself..."
                  value={formData.bio}
                  onChange={(e) => handleFieldChange('bio', e.target.value)}
                  rows={4}
                />
                <Typography variant="label1" className="text-primary/70 mt-(--lsd-spacing-smallest)">
                  {formData.bio.length} / 500 characters
                </Typography>
              </div>

              <div>
                <Label htmlFor="website">Website (optional)</Label>
                <Input
                  id="website"
                  placeholder="https://yourwebsite.com"
                  type="url"
                  value={formData.website}
                  onChange={(e) => handleFieldChange('website', e.target.value)}
                />
              </div>

              <div>
                <Label htmlFor="linkedin">LinkedIn (optional)</Label>
                <Input
                  id="linkedin"
                  placeholder="https://linkedin.com/in/yourprofile"
                  type="url"
                  value={formData.linkedin}
                  onChange={(e) => handleFieldChange('linkedin', e.target.value)}
                />
              </div>

              <div>
                <Label htmlFor="github">GitHub (optional)</Label>
                <Input
                  id="github"
                  placeholder="https://github.com/username"
                  type="url"
                  value={formData.github}
                  onChange={(e) => handleFieldChange('github', e.target.value)}
                />
              </div>

              <div>
                <Label htmlFor="timezone">Timezone</Label>
                <Select
                  value={formData.timezone}
                  onValueChange={(value) => handleFieldChange('timezone', value)}
                >
                  <SelectTrigger id="timezone">
                    <SelectValue />
                  </SelectTrigger>
                  <SelectContent>
                    <SelectItem value="UTC">UTC (Coordinated Universal Time)</SelectItem>
                    <SelectItem value="America/New_York">Eastern Time</SelectItem>
                    <SelectItem value="America/Chicago">Central Time</SelectItem>
                    <SelectItem value="America/Los_Angeles">Pacific Time</SelectItem>
                    <SelectItem value="Europe/London">London</SelectItem>
                    <SelectItem value="Europe/Paris">Paris</SelectItem>
                    <SelectItem value="Asia/Tokyo">Tokyo</SelectItem>
                  </SelectContent>
                </Select>
              </div>

              <div className="space-y-(--lsd-spacing-small)">
                <div className="flex items-center justify-between">
                  <label htmlFor="notifyEmail" className="text-sm font-medium">Email Notifications</label>
                  <Switch
                    id="notifyEmail"
                    checked={formData.notifyEmail}
                    onCheckedChange={(checked) => handleFieldChange('notifyEmail', checked)}
                  />
                </div>

                <div className="flex items-center justify-between">
                  <label htmlFor="notifyPush" className="text-sm font-medium">Push Notifications</label>
                  <Switch
                    id="notifyPush"
                    checked={formData.notifyPush}
                    onCheckedChange={(checked) => handleFieldChange('notifyPush', checked)}
                  />
                </div>
              </div>
            </div>

            {loadingState !== 'idle' && (
              <div className="space-y-(--lsd-spacing-smaller)">
                <Progress value={validationProgress} />
                <Typography variant="label1" className="text-center text-primary/70">
                  {loadingState === 'validating' && 'Validating your information...'}
                  {loadingState === 'saving' && 'Saving your profile...'}
                  {loadingState === 'success' && 'Profile saved successfully!'}
                </Typography>
              </div>
            )}

            <Button
              type="submit"
              className="w-full mt-(--lsd-spacing-base)"
              disabled={!isFormValid || loadingState !== 'idle'}
              variant="filled"
            >
              <FloppyDiskIcon className="mr-(--lsd-spacing-smaller)" weight="duotone" />
              {loadingState === 'saving' ? 'Saving...' : 'Save Profile'}
            </Button>
          </form>
        </CardContent>
      </Card>
    </div>
  )
}
```

**Key Patterns Demonstrated:**
- Comprehensive form validation with real-time error feedback
- Conditional styling based on validation state
- Inline icons with Input components
- Character count and helper text
- Multi-stage loading states with progress indicator
- Success feedback with Alert
- Switch components for toggle settings
- Select dropdowns with predefined options

## Example 3: Data Table Filtering and Sorting

Complex data display with sorting, filtering, pagination, and bulk operations.

```typescript
'use client'

import { useState, useMemo } from 'react'
import {
  Button,
  Card,
  CardContent,
  Input,
  Select,
  SelectContent,
  SelectItem,
  SelectTrigger,
  SelectValue,
  Table,
  TableBody,
  TableCell,
  TableHead,
  TableHeader,
  TableRow,
  Checkbox,
  Typography,
  Badge,
  Alert,
  AlertDescription,
} from '@nipsys/lsd'
import { ArrowUpIcon, ArrowDownIcon, TrashIcon, EditIcon, PersonIcon, CheckCircleIcon } from '@phosphor-icons/react'

interface User {
  id: string
  name: string
  email: string
  role: 'Admin' | 'Editor' | 'Viewer'
  status: 'Active' | 'Inactive' | 'Pending'
  lastLogin: string
  createdAt: string
  department: string
  location: string
  projects: number
  avatar?: string
}

const mockUsers: User[] = [
  {
    id: '1',
    name: 'Alice Johnson',
    email: 'alice.johnson@company.com',
    role: 'Admin',
    status: 'Active',
    lastLogin: '2024-01-15',
    createdAt: '2023-06-10',
    department: 'Engineering',
    location: 'New York',
    projects: 12,
  },
  {
    id: '2',
    name: 'Bob Smith',
    email: 'bob.smith@company.com',
    role: 'Editor',
    status: 'Active',
    lastLogin: '2024-01-14',
    createdAt: '2023-07-22',
    department: 'Marketing',
    location: 'San Francisco',
    projects: 8,
  },
  {
    id: '3',
    name: 'Charlie Brown',
    email: 'charlie.brown@company.com',
    role: 'Viewer',
    status: 'Inactive',
    lastLogin: '2024-01-10',
    createdAt: '2023-08-05',
    department: 'Sales',
    location: 'Chicago',
    projects: 5,
  },
  {
    id: '4',
    name: 'Diana Prince',
    email: 'diana.prince@company.com',
    role: 'Admin',
    status: 'Active',
    lastLogin: '2024-01-16',
    createdAt: '2023-05-15',
    department: 'Engineering',
    location: 'Austin',
    projects: 15,
  },
  {
    id: '5',
    name: 'Ethan Hunt',
    email: 'ethan.hunt@company.com',
    role: 'Editor',
    status: 'Pending',
    lastLogin: '2024-01-12',
    createdAt: '2024-01-01',
    department: 'Operations',
    location: 'Boston',
    projects: 3,
  },
  {
    id: '6',
    name: 'Fiona Gallagher',
    email: 'fiona.gallagher@company.com',
    role: 'Viewer',
    status: 'Active',
    lastLogin: '2024-01-13',
    createdAt: '2023-09-18',
    department: 'Human Resources',
    location: 'Seattle',
    projects: 7,
  },
  {
    id: '7',
    name: 'George Miller',
    email: 'george.miller@company.com',
    role: 'Editor',
    status: 'Active',
    lastLogin: '2024-01-11',
    createdAt: '2023-10-02',
    department: 'Finance',
    location: 'Denver',
    projects: 9,
  },
  {
    id: '8',
    name: 'Hannah Lee',
    email: 'hannah.lee@company.com',
    role: 'Viewer',
    status: 'Inactive',
    lastLogin: '2024-01-08',
    createdAt: '2023-11-20',
    department: 'Marketing',
    location: 'Los Angeles',
    projects: 4,
  },
  {
    id: '9',
    name: 'Ian Wright',
    email: 'ian.wright@company.com',
    role: 'Admin',
    status: 'Active',
    lastLogin: '2024-01-15',
    createdAt: '2023-04-12',
    department: 'Engineering',
    location: 'Portland',
    projects: 18,
  },
  {
    id: '10',
    name: 'Julia Roberts',
    email: 'julia.roberts@company.com',
    role: 'Editor',
    status: 'Active',
    lastLogin: '2024-01-14',
    createdAt: '2023-06-30',
    department: 'Design',
    location: 'Miami',
    projects: 11,
  },
]

type SortField = keyof User
type SortOrder = 'asc' | 'desc'

export function UserTable() {
  const [searchTerm, setSearchTerm] = useState('')
  const [roleFilter, setRoleFilter] = useState<'all' | 'Admin' | 'Editor' | 'Viewer'>('all')
  const [statusFilter, setStatusFilter] = useState<'all' | 'Active' | 'Inactive' | 'Pending'>('all')
  const [departmentFilter, setDepartmentFilter] = useState('all')
  const [sortField, setSortField] = useState<SortField>('name')
  const [sortOrder, setSortOrder] = useState<SortOrder>('asc')
  const [currentPage, setCurrentPage] = useState(1)
  const [selectedUsers, setSelectedUsers] = useState<Set<string>>(new Set())
  const [itemsPerPage, setItemsPerPage] = useState(5)
  const [showBulkDeleteAlert, setShowBulkDeleteAlert] = useState(false)

  const departments = Array.from(new Set(mockUsers.map(u => u.department)))

  const filteredAndSortedUsers = useMemo(() => {
    let filtered = mockUsers.filter(user => {
      const matchesSearch =
        user.name.toLowerCase().includes(searchTerm.toLowerCase()) ||
        user.email.toLowerCase().includes(searchTerm.toLowerCase()) ||
        user.department.toLowerCase().includes(searchTerm.toLowerCase()) ||
        user.location.toLowerCase().includes(searchTerm.toLowerCase())

      const matchesRole = roleFilter === 'all' || user.role === roleFilter
      const matchesStatus = statusFilter === 'all' || user.status === statusFilter
      const matchesDepartment = departmentFilter === 'all' || user.department === departmentFilter

      return matchesSearch && matchesRole && matchesStatus && matchesDepartment
    })

    filtered.sort((a, b) => {
      const aValue = a[sortField]
      const bValue = b[sortField]

      if (aValue < bValue) return sortOrder === 'asc' ? -1 : 1
      if (aValue > bValue) return sortOrder === 'asc' ? 1 : -1
      return 0
    })

    return filtered
  }, [searchTerm, roleFilter, statusFilter, departmentFilter, sortField, sortOrder])

  const totalPages = Math.ceil(filteredAndSortedUsers.length / itemsPerPage)
  const paginatedUsers = filteredAndSortedUsers.slice(
    (currentPage - 1) * itemsPerPage,
    currentPage * itemsPerPage
  )

  const handleSort = (field: SortField) => {
    if (sortField === field) {
      setSortOrder(sortOrder === 'asc' ? 'desc' : 'asc')
    } else {
      setSortField(field)
      setSortOrder('asc')
    }
  }

  const SortIcon = ({ field }: { field: SortField }) => {
    if (sortField !== field) return null
    return sortOrder === 'asc' ? <ArrowUpIcon size={16} /> : <ArrowDownIcon size={16} />
  }

  const handleSelectUser = (userId: string) => {
    setSelectedUsers(prev => {
      const newSet = new Set(prev)
      if (newSet.has(userId)) {
        newSet.delete(userId)
      } else {
        newSet.add(userId)
      }
      return newSet
    })
  }

  const handleSelectAll = () => {
    const allIds = paginatedUsers.map(u => u.id)
    if (selectedUsers.size === allIds.length && allIds.every(id => selectedUsers.has(id))) {
      setSelectedUsers(new Set())
    } else {
      setSelectedUsers(new Set(allIds))
    }
  }

  const isAllSelected = paginatedUsers.length > 0 &&
    paginatedUsers.every(user => selectedUsers.has(user.id))

  const isSomeSelected = paginatedUsers.some(user => selectedUsers.has(user.id))

  const handleBulkDelete = () => {
    setShowBulkDeleteAlert(true)
  }

  const confirmBulkDelete = () => {
    setSelectedUsers(new Set())
    setShowBulkDeleteAlert(false)
    setCurrentPage(1)
  }

  const getStatusBadge = (status: User['status']) => {
    const variants: Record<User['status'], 'default' | 'success' | 'warning'> = {
      Active: 'success',
      Inactive: 'default',
      Pending: 'warning',
    }
    return <Badge variant={variants[status]}>{status}</Badge>
  }

  const getRoleBadge = (role: User['role']) => {
    const color = role === 'Admin' ? 'bg-primary text-primary-foreground' : 'bg-secondary text-secondary-foreground'
    return <span className={`px-(--lsd-spacing-smaller) py-(--lsd-spacing-smallest) rounded text-xs ${color}`}>
      {role}
    </span>
  }

  const formatDate = (dateString: string) => {
    const date = new Date(dateString)
    return new Intl.DateTimeFormat('en-US', {
      month: 'short',
      day: 'numeric',
      year: 'numeric',
    }).format(date)
  }

  return (
    <Card>
      <CardContent className="p-(--lsd-spacing-base)">
        <div className="space-y-(--lsd-spacing-base)">
          <div className="flex items-center justify-between">
            <div>
              <Typography variant="h1">User Management</Typography>
              <Typography variant="body2" className="text-primary/70">
                Manage team members and permissions
              </Typography>
            </div>
            {selectedUsers.size > 0 && (
              <Button variant="destructive" size="sm" onClick={handleBulkDelete}>
                <TrashIcon className="mr-(--lsd-spacing-smaller)" size={18} weight="duotone" />
                Delete ({selectedUsers.size})
              </Button>
            )}
          </div>

          <div className="flex gap-(--lsd-spacing-base) flex-wrap">
            <div className="flex-1 min-w-[200px]">
              <Input
                placeholder="Search users..."
                value={searchTerm}
                onChange={(e) => setSearchTerm(e.target.value)}
              />
            </div>

            <Select value={roleFilter} onValueChange={setRoleFilter}>
              <SelectTrigger className="w-[150px]">
                <SelectValue />
              </SelectTrigger>
              <SelectContent>
                <SelectItem value="all">All Roles</SelectItem>
                <SelectItem value="Admin">Admin</SelectItem>
                <SelectItem value="Editor">Editor</SelectItem>
                <SelectItem value="Viewer">Viewer</SelectItem>
              </SelectContent>
            </Select>

            <Select value={statusFilter} onValueChange={setStatusFilter}>
              <SelectTrigger className="w-[150px]">
                <SelectValue />
              </SelectTrigger>
              <SelectContent>
                <SelectItem value="all">All Status</SelectItem>
                <SelectItem value="Active">Active</SelectItem>
                <SelectItem value="Inactive">Inactive</SelectItem>
                <SelectItem value="Pending">Pending</SelectItem>
              </SelectContent>
            </Select>

            <Select value={departmentFilter} onValueChange={setDepartmentFilter}>
              <SelectTrigger className="w-[180px]">
                <SelectValue />
              </SelectTrigger>
              <SelectContent>
                <SelectItem value="all">All Departments</SelectItem>
                {departments.map(dept => (
                  <SelectItem key={dept} value={dept}>{dept}</SelectItem>
                ))}
              </SelectContent>
            </Select>
          </div>

          {showBulkDeleteAlert && (
            <Alert>
              <WarningIcon size={20} weight="duotone" />
              <AlertDescription>
                Are you sure you want to delete {selectedUsers.size} user(s)? This action cannot be undone.
                <div className="flex gap-(--lsd-spacing-smaller) mt-(--lsd-spacing-small)">
                  <Button
                    variant="filled"
                    size="sm"
                    onClick={confirmBulkDelete}
                  >
                    Confirm Delete
                  </Button>
                  <Button
                    variant="ghost"
                    size="sm"
                    onClick={() => setShowBulkDeleteAlert(false)}
                  >
                    Cancel
                  </Button>
                </div>
              </AlertDescription>
            </Alert>
          )}

          <Table className="mt-(--lsd-spacing-base)">
            <TableHeader>
              <TableRow>
                <TableHead className="w-[50px]">
                  <Checkbox
                    checked={isAllSelected}
                    onCheckedChange={handleSelectAll}
                    aria-label="Select all users"
                  />
                </TableHead>
                <TableHead>
                  <Button
                    variant="ghost"
                    size="sm"
                    onClick={() => handleSort('name')}
                    className="flex items-center gap-(--lsd-spacing-smaller) font-medium"
                  >
                    Name <SortIcon field="name" />
                  </Button>
                </TableHead>
                <TableHead>
                  <Button
                    variant="ghost"
                    size="sm"
                    onClick={() => handleSort('email')}
                    className="flex items-center gap-(--lsd-spacing-smaller) font-medium"
                  >
                    Email <SortIcon field="email" />
                  </Button>
                </TableHead>
                <TableHead>Role</TableHead>
                <TableHead>Status</TableHead>
                <TableHead>Department</TableHead>
                <TableHead>Location</TableHead>
                <TableHead>Projects</TableHead>
                <TableHead>
                  <Button
                    variant="ghost"
                    size="sm"
                    onClick={() => handleSort('lastLogin')}
                    className="flex items-center gap-(--lsd-spacing-smaller) font-medium"
                  >
                    Last Login <SortIcon field="lastLogin" />
                  </Button>
                </TableHead>
                <TableHead>Actions</TableHead>
              </TableRow>
            </TableHeader>
            <TableBody>
              {paginatedUsers.map(user => (
                <TableRow key={user.id}>
                  <TableCell>
                    <Checkbox
                      checked={selectedUsers.has(user.id)}
                      onCheckedChange={() => handleSelectUser(user.id)}
                      aria-label={`Select ${user.name}`}
                    />
                  </TableCell>
                  <TableCell className="font-medium flex items-center gap-(--lsd-spacing-smaller)">
                    <PersonIcon size={20} weight="duotone" />
                    {user.name}
                  </TableCell>
                  <TableCell>{user.email}</TableCell>
                  <TableCell>{getRoleBadge(user.role)}</TableCell>
                  <TableCell>{getStatusBadge(user.status)}</TableCell>
                  <TableCell>{user.department}</TableCell>
                  <TableCell>{user.location}</TableCell>
                  <TableCell>{user.projects}</TableCell>
                  <TableCell>{formatDate(user.lastLogin)}</TableCell>
                  <TableCell>
                    <div className="flex gap-(--lsd-spacing-smaller)">
                      <Button variant="ghost" size="sm">
                        <EditIcon size={16} weight="duotone" />
                      </Button>
                      <Button variant="ghost" size="sm" destructive>
                        <TrashIcon size={16} weight="duotone" />
                      </Button>
                    </div>
                  </TableCell>
                </TableRow>
              ))}
            </TableBody>
          </Table>

          {paginatedUsers.length === 0 && (
            <div className="text-center py-(--lsd-spacing-largest)">
              <PersonIcon size={48} weight="duotone" className="text-primary/30 mx-auto mb-(--lsd-spacing-base)" />
              <Typography variant="body1" className="text-primary/60">
                No users found matching your criteria.
              </Typography>
              <Typography variant="label1" className="text-primary/50 mt-(--lsd-spacing-smaller)">
                Try adjusting your filters or search terms
              </Typography>
            </div>
          )}

          <div className="flex items-center justify-between flex-wrap gap-(--lsd-spacing-base)">
            <div className="flex items-center gap-(--lsd-spacing-base)">
              <Select value={itemsPerPage.toString()} onValueChange={(value) => setItemsPerPage(Number(value))}>
                <SelectTrigger className="w-[100px]">
                  <SelectValue />
                </SelectTrigger>
                <SelectContent>
                  <SelectItem value="5">5</SelectItem>
                  <SelectItem value="10">10</SelectItem>
                  <SelectItem value="20">20</SelectItem>
                  <SelectItem value="50">50</SelectItem>
                </SelectContent>
              </Select>
              <Typography variant="label1" className="text-primary/70">
                Showing {((currentPage - 1) * itemsPerPage) + 1} to{' '}
                {Math.min(currentPage * itemsPerPage, filteredAndSortedUsers.length)} of{' '}
                {filteredAndSortedUsers.length} users
              </Typography>
            </div>

            <div className="flex gap-(--lsd-spacing-smaller)">
              <Button
                variant="outline"
                size="sm"
                onClick={() => setCurrentPage(p => Math.max(1, p - 1))}
                disabled={currentPage === 1}
              >
                Previous
              </Button>
              <div className="flex items-center gap-(--lsd-spacing-smaller)">
                {Array.from({ length: Math.min(5, totalPages) }, (_, i) => {
                  let pageNum = i + 1
                  if (totalPages > 5 && currentPage > 3) pageNum = currentPage - 2 + i
                  if (pageNum > totalPages) return null

                  return (
                    <Button
                      key={pageNum}
                      variant={currentPage === pageNum ? 'default' : 'ghost'}
                      size="sm"
                      onClick={() => setCurrentPage(pageNum)}
                    >
                      {pageNum}
                    </Button>
                  )
                }).filter(Boolean)}
              </div>
              <Button
                variant="outline"
                size="sm"
                onClick={() => setCurrentPage(p => Math.min(totalPages, p + 1))}
                disabled={currentPage === totalPages || totalPages === 0}
              >
                Next
              </Button>
            </div>
          </div>
        </div>
      </CardContent>
    </Card>
  )
}
```

**Key Patterns Demonstrated:**
- Complex data filtering with multiple criteria
- Sorting with direction indicators on headers
- Pagination with configurable page size
- Bulk selection and operations
- Conditional styling and badges
- Empty state handling with icons
- Responsive layout with flexible wrapping
- Multi-level filtering (text, role, status, department)
- Date formatting with Intl API

## Key Lessons for Complex Applications

### 1. State Management Patterns

```typescript
// Pattern: Lift state up to parent component
function ParentComponent() {
  const [state, setState] = useState(initialState)

  return (
    <>
      <ChildA data={state} onUpdate={setState} />
      <ChildB data={state} onUpdate={setState} />
    </>
  )
}

// Pattern: Use useMemo for expensive computations
const filteredAndSorted = useMemo(() => {
  return data
    .filter(item => matchesCriteria(item))
    .sort((a, b) => compareItems(a, b))
}, [data, criteria])
```

**Best Practice:** Keep state close to where it's used, but lift it up when needed by multiple components. Use `useMemo` to prevent unnecessary recalculations.

### 2. Event Handler Patterns

```typescript
// Pattern: Consistent event handlers for form fields
const handleFieldChange = <T extends keyof FormData>(
  field: T,
  value: FormData[T]
) => {
  setFormData(prev => ({ ...prev, [field]: value }))
  // Clear errors, trigger validation, etc.
  if (errors[field as keyof FormErrors]) {
    setErrors(prev => ({ ...prev, [field]: undefined }))
  }
}

// Pattern: Generic action handlers
const handleBulkAction = (action: 'delete' | 'archive' | 'export') => {
  const selected = Array.from(selectedIds)
  switch (action) {
    case 'delete':
      confirmBulkDelete(selected)
      break
    case 'archive':
      archiveItems(selected)
      break
    case 'export':
      exportItems(selected)
      break
  }
}
```

**Best Practice:** Create reusable, type-safe event handlers that can clear related state (like errors) and trigger side effects.

### 3. Composition Patterns

```typescript
// Pattern: Compose LSD components together
<div className="space-y-(--lsd-spacing-base)">
  <Card>
    <CardContent className="p-(--lsd-spacing-base)">
      <div className="space-y-(--lsd-spacing-base)">
        <div>
          <Label htmlFor="field">Field Label</Label>
          <Input id="field" />
        </div>
        <div>
          <Label htmlFor="another">Another Field</Label>
          <Select>
            <SelectTrigger id="another">
              <SelectValue />
            </SelectTrigger>
            <SelectContent>
              <SelectItem value="option1">Option 1</SelectItem>
            </SelectContent>
          </Select>
        </div>
        <Button>Submit</Button>
      </div>
    </CardContent>
  </Card>
</div>
```

**Best Practice:** Wrap related components in Cards for visual grouping, use consistent spacing with LSD variables, and maintain clear semantic hierarchy.

### 4. Loading and Error States

```typescript
// Pattern: Show loading state during async operations
const [loading, setLoading] = useState<boolean>(false)
const [error, setError] = useState<string | null>(null)
const [loadingProgress, setLoadingProgress] = useState(0)

const handleSubmit = async () => {
  setLoading(true)
  setError(null)
  setLoadingProgress(0)

  const progressInterval = setInterval(() => {
    setLoadingProgress(prev => Math.min(prev + 10, 100))
  }, 100)

  try {
    await apiCall()
    // Show success state
  } catch (err) {
    setError('Failed to save. Please try again.')
  } finally {
    clearInterval(progressInterval)
    setLoading(false)
  }
}

return (
  <form onSubmit={handleSubmit}>
    {/* Form fields */}
    <Button disabled={loading}>
      {loading ? 'Saving...' : 'Save'}
    </Button>
    {error && (
      <Alert variant="destructive">
        <AlertDescription>{error}</AlertDescription>
      </Alert>
    )}
    {loading && (
      <Progress value={loadingProgress} />
    )}
  </form>
)
```

**Best Practice:** Always disable buttons during loading, show meaningful error messages, and provide progress feedback for long-running operations.

### 5. Conditional Rendering

```typescript
// Pattern: Show different UI based on state
{loading ? (
  <div className="flex items-center justify-center py-(--lsd-spacing-largest)">
    <Typography variant="body1" className="text-primary/70">
      Loading...
    </Typography>
  </div>
) : error ? (
  <Alert>
    <AlertDescription>{error}</AlertDescription>
  </Alert>
) : items.length === 0 ? (
  <EmptyState
    icon={PersonIcon}
    title="No items found"
    description="Try adjusting your filters or create a new item"
  />
) : (
  <Table>
    {/* Table rows */}
  </Table>
)}
```

**Best Practice:** Handle all possible states explicitly (loading, error, empty, success). Use descriptive empty states that guide users to the next action.

---

## Additional Best Practices

### Consistent Spacing with LSD Variables

Always use LSD spacing variables instead of arbitrary Tailwind values:

```tsx
// ✅ Correct
className="space-y-(--lsd-spacing-base)"
className="gap-(--lsd-spacing-base)"
className="mt-(--lsd-spacing-base)"
className="p-(--lsd-spacing-base)"

// ❌ Incorrect
className="space-y-4"
className="gap-2"
className="mt-4"
className="p-4"
```

### LSD Color Tokens Only

Use only LSD-approved color tokens:

```tsx
// ✅ Correct
className="text-primary"
className="text-destructive"

// ❌ Incorrect
className="text-muted-foreground"
className="bg-muted"
```

### Phosphor Icons with Duotone Weight

Import icons from `@phosphor-icons/react` and use `weight="duotone"` for most icons:

```tsx
import { PlusIcon, TrashIcon, EditIcon } from '@phosphor-icons/react'

// ✅ Correct - Most icons use weight="duotone"
<Button>
  <PlusIcon weight="duotone" />
</Button>
<Button destructive>
  <TrashIcon weight="duotone" />
</Button>

// ✅ Correct - CheckIcon and PlusIcon (without Icon suffix) use default
<Button>
  <Check />
</Button>
<Button>
  <Plus />
</Button>
```

### Accessibility Considerations

- Use semantic HTML elements
- Provide clear labels for form inputs
- Use ARIA attributes when needed
- Support keyboard navigation
- Ensure sufficient color contrast
- Focus management for modals and dialogs

### Performance Optimization

- Use `useMemo` for expensive computations
- Use `useCallback` for function props
- Implement debounce for search inputs
- Lazy load large datasets
- Virtualize long lists when needed

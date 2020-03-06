import { isNull } from 'lodash'
import React, {
    ChangeEvent,
    FormEvent,
    memo,
    MouseEvent,
    ReactElement,
    useState,
} from 'react'
import { v4 as uuid } from 'uuid'
import {
    Badge,
    Button,
    CircularProgress,
    Fab,
    Menu,
    MenuItem,
    TextField,
} from '@material-ui/core'
import { SearchTwoTone } from '@material-ui/icons'

import { CompaniesQueryVariables, Specialty } from '~/graphql'
import { Root, Search } from './styled'

interface Props {
    loading: boolean
    specialties: Specialty[]
    setSearch: (search: CompaniesQueryVariables['search']) => void
    setSpecialties: (
        specialties: CompaniesQueryVariables['specialties'],
    ) => void
}

export const SearchBar = memo(
    ({
        loading,
        specialties,
        setSearch,
        setSpecialties,
    }: Props): ReactElement => {
        const id = uuid()
        const [term, setTerm] = useState('')
        const [searched, setSearched] = useState(term)
        const [selected, setSelected] = useState<
            CompaniesQueryVariables['specialties']
        >([])
        const [anchorEl, setAnchorEl] = useState(null)

        function updateTerm(event: ChangeEvent<{ value: string }>): void {
            const updated = event.target.value

            setTerm(updated)

            if (updated === '' && updated !== searched) {
                setSearch(updated)
            }
        }

        function search(event: FormEvent<HTMLFormElement>): void {
            event.preventDefault()

            setSearch(term)
            setSearched(term)
        }

        function openMenu(event: MouseEvent<HTMLButtonElement>): void {
            setAnchorEl(event.currentTarget)
        }

        function closeMenu(): void {
            setAnchorEl(null)
        }

        function toggleSpecialty(specialty: Specialty): () => void {
            return () => {
                const updated = selected.includes(specialty.id)
                    ? selected.filter(
                          (selectedId) => selectedId !== specialty.id,
                      )
                    : [...selected, specialty.id]

                setSelected(updated)
                setSpecialties(updated)
            }
        }

        return (
            <Root>
                <form noValidate autoComplete="off" onSubmit={search}>
                    <TextField
                        label="Search"
                        size="small"
                        type="search"
                        value={term}
                        variant="outlined"
                        onChange={updateTerm}
                    />
                    <Search>
                        {loading && searched.length > 0 && (
                            <CircularProgress color="secondary" size={48} />
                        )}
                        <Fab
                            color="primary"
                            disabled={
                                term.trim().length === 0 || term === searched
                            }
                            size="small"
                            type="submit"
                        >
                            <SearchTwoTone />
                        </Fab>
                    </Search>
                    <Badge badgeContent={selected.length} color="secondary">
                        <Button
                            aria-controls={id}
                            aria-haspopup="true"
                            variant="outlined"
                            onClick={openMenu}
                        >
                            Filter
                        </Button>
                    </Badge>
                    <Menu
                        id={id}
                        anchorEl={anchorEl}
                        keepMounted
                        open={!isNull(anchorEl)}
                        onClose={closeMenu}
                    >
                        {specialties.map((specialty) => (
                            <MenuItem
                                key={specialty.id}
                                selected={selected.includes(specialty.id)}
                                onClick={toggleSpecialty(specialty)}
                            >
                                {specialty.name}
                            </MenuItem>
                        ))}
                    </Menu>
                </form>
            </Root>
        )
    },
)
